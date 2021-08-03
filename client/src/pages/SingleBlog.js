import React from 'react';

import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  // get unique id
  const { id } = useParams();

  // get data from custom hook
  const { loading, error, data } = useFetch(
    `http://localhost:1337/blogs/${id}`
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :/</p>;

  return (
    <article className="blog">
      <h1>{data.title}</h1>
      <small>console list</small>
      <p>{data.body}</p>
    </article>
  );
};

export default SingleBlog;
