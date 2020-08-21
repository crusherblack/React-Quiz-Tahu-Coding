import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    setPosts(data);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card mt-2 ">
          <div className="card-header bg-white ">
            <h3>List Posts</h3>
          </div>
          <div className="card-body">
            {!posts ? (
              <h1>Loading...</h1>
            ) : (
              posts.map((post) => (
                <div key={post.id}>
                  <li className="text font-weight-bold">{post.title}</li>
                  <small>{post.body}</small>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
