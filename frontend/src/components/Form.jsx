import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = ({ onUpload }) => {
  const [newPost, setNewPost] = useState({
    name: "",
    message: "",
    date: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://momentsbackend-o0xn.onrender.com/api/post", newPost);
      onUpload();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = ({ target }) => {
    setNewPost((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
<div className="mt-2 h-96 bg-blue-100 flex flex-col items-center justify-center rounded-lg">
<p className="text-center mb-2 md:hidden">Add</p>

<p className="text-center mb-2 hidden md:block">Add moments here</p>
    <div className="w-full flex flex-col items-center justify-center p-1">
      <form className="text-primary max-w-md  " onSubmit={formSubmit}>
        <div className="mb-1">
          <input
            placeholder="title"
            type="text"
            id="name"
            name="name"
            value={newPost.name}
            onChange={handleChange}
            className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md"
          />
        </div>
        <div className="mb-1">
          <textarea
            placeholder="message"
            id="message"
            name="message"
            value={newPost.message}
            onChange={handleChange}
            className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md resize-none"
            style={{height: "10rem"}}
          ></textarea>
        </div>
        <div className="mb-1">
          <input
            type="date"
            id="date"
            name="date"
            value={newPost.date}
            onChange={handleChange}
            className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full px-2 py-1 bg-blue-900 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
    </div>

  );
};

export default Form;
