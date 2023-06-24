// LandingPage.js

import React from "react";
import Form from "./Form";
import Search from "./Search";
import DisplayPosts from "./DisplayPosts";
import Navbar from "./Navbar";
import { useState } from "react";

const LandingPage = () => {
  const [postUpdated, setPostUpdated] = useState();
  const [onSearch, setOnSearch] = useState("");

  const handleUpload = () => {
    setPostUpdated(new Date());
  };

  const handleSearch = (data) =>{
    setOnSearch(data);
  }

  return (
    <div className="h-4/5">
      <div>
        <Navbar />
      </div>
      <div className="rounded-lg flex flex-col-reverse md:flex-row p-2">
        <div className="w-full lg:w-4/5  bg-blue-100  rounded-lg p-2 flex flex-row flex-wrap h-5/5 mb-2">
          <DisplayPosts postUpdated={postUpdated} onUpload={handleUpload} onSearch={onSearch}/>
        </div>
        <div className="w-full lg:w-1/5 rounded-lg p-2">
          <Search onSearch={handleSearch} />
          <Form onUpload={handleUpload} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
