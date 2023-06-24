import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const DisplayPosts = ({ postUpdated, onUpload, onSearch }) => {
  const [posts, setPosts] = useState([]);
  const [notSearching, setNotSearching] = useState(true);

  useEffect(() => {
    getPostsList();
  }, [postUpdated]);

  useEffect(() => {
    if (onSearch) {
      setNotSearching(false);
      handleSearchLoad();
    } else {
      setNotSearching(true);
    }
  }, [onSearch]);

  const handleReset = () => {
    setNotSearching(true);
    getPostsList(); // Fetch all posts again
  };

  const handleSearchLoad = async () => {
    try {
      const response = await axios.get(
        `https://momentsbackend-o0xn.onrender.com/api/find/${onSearch}`
      );
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPosts = async () => {
    try {
      const response = await axios.get("https://momentsbackend-o0xn.onrender.com/api/getPost");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getPostsList = async () => {
    try {
      const updatedPosts = await getPosts();
      setPosts(updatedPosts);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostUpdated = () => {
    onUpload();
  };

  return (
    <div>
      {notSearching ? (
        <div className="h-fit w-full">
          <div className="flex flex-wrap -mx-2">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="mb-2 px-2 "
                >
                  <Card
                    name={post.name}
                    message={post.message}
                    date={post.date}
                    id={post._id}
                    onPostUpdated={handlePostUpdated}
                  />
                </div>
              ))
            ) : (
              <h1 className="m-2 font-bold pl-3 text-xl">No Moments Added Yet</h1>
              )}
          </div>
        </div>
      ) : (
        <div className="h-fit w-full">
          <div className="flex flex-wrap -mx-2">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="mb-2 px-2">
                  <Card
                    name={post.name}
                    message={post.message}
                    date={post.date}
                    id={post._id}
                    onPostUpdated={handlePostUpdated}
                  />
                  
                </div>
              ))
            ) : (
              <>
                <h1 className="m-2 font-bold pl-3 text-xl">No Posts Found</h1>
               
              </>
            )}
          </div>
          <button
                  onClick={handleReset}
                  className="m-2 p-2 bg-red-500 text-white rounded-lg w-fit"
                >
                  Reset
                </button>
        </div>
      )}
    </div>
  );
};

export default DisplayPosts;
