// import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BLOGS = gql`
  query GetBlogs {
    blogs {
      id
      title
      body
      cover {
        size
      }
      categories {
        id
        name
      }
    }
  }
`;

const HomePage = () => {
  // // get data from custom hook
  // const { loading, error, data } = useFetch('http://localhost:1337/blogs');

  // get data from graphQL queries
  const { loading, error, data } = useQuery(BLOGS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :/</p>;

  return (
    <div>
      {data.blogs.map((blog) => (
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

export default HomePage;
