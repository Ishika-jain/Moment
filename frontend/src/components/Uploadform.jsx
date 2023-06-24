import React, { useState } from "react";
import axios from "axios";

const Uploadform = ({onUpload}) => {
  const [newPost, setNewPost] = useState({
    name: "",
    message: "",
    date: ""
  });

  const formSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await axios.post("https://momentsbackend-o0xn.onrender.com/api/post", newPost);
      onUpload();
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = ({ target }) => {
    setNewPost((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  return (
    <div>
      p
    </div>

  );
};

export default Uploadform;
