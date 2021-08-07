import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
      blogs {
        title
        body
        id
        categories {
          name
          id
        }
      }
    }
  }
`;

const Category = () => {
  // get id
  const { id } = useParams();

  // get data from graphQL queries
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :/</p>;

  // jsx
  return (
    <div>
      <h2>{data.category.title}</h2>

      {data.category.blogs.map((blog) => (
        <article className="blog" key={blog.id}>
          <h1>{blog.title}</h1>

          {blog.categories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <ReactMarkdown>{blog.body.substring(0, 300)}</ReactMarkdown>
          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </article>
      ))}
    </div>
  );
};

export default Category;
