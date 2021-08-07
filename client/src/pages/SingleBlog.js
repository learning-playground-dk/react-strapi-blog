import React from 'react';
// import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
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

const SingleBlog = () => {
  // get unique id
  const { id } = useParams();

  // // get data from custom hook
  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/blogs/${id}`
  // );

  // get data from graphQL queries
  const { loading, error, data } = useQuery(BLOG, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :/</p>;

  return (
    <article className="blog">
      <h1>{data.blog.title}</h1>

      {data.blog.categories.map((c) => (
        <small key={c.id}>{c.name}</small>
      ))}

      <ReactMarkdown>{data.blog.body}</ReactMarkdown>
    </article>
  );
};

export default SingleBlog;
