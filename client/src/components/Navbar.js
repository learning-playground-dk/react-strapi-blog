import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

const Navbar = () => {
  // get data from graphQL queries
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading categories...</p>;

  if (error) return <p>Error fetching categories :/</p>;

  // jsx
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Homepage</h1>
      </Link>
      <nav className="categories">
        <span>Filter Blogs by category:</span>
        {data.categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
