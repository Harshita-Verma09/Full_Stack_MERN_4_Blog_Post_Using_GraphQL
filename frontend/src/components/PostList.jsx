import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";

const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      title
      content
    }
  }
`;

const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS);

  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: ["getPosts"],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error 😢</p>;

  return (
    <div>
      {data.getPosts.map((post) => (
        <div key={post.id} style={cardStyle}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <button
            style={deleteBtn}
            onClick={() => deletePost({ variables: { id: post.id } })}
          >
            Delete 🗑
          </button>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "15px",
  margin: "10px 0",
  borderRadius: "10px",
};

const deleteBtn = {
  marginTop: "10px",
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
};

export default PostList;
