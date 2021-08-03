import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // get data from custom hook
  const { loading, error, data } = useFetch('http://localhost:1337/blogs');

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :/</p>;

  return (
    <div>
      {data.map((blog) => (
        <article className="blog" key={blog.id}>
          <h1>{blog.title}</h1>
          <small>console list</small>
          <p>{blog.body.substring(0, 300)}</p>
          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </article>
      ))}
    </div>
  );
};

export default HomePage;
