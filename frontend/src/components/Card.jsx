// Card.js
import React, { useState } from "react";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import axios from "axios";

const Card = ({ name, message, date, id, onPostUpdated }) => {
  const [isBig, setIsBig] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const handleEdit = async () => {
    try {
      setIsEditing(true);
      const res = await axios.put(`https://momentsbackend-o0xn.onrender.com/api/edit/${id}`);
      onPostUpdated(); 
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://momentsbackend-o0xn.onrender.com/api/delete/${id}`);
      onPostUpdated(); // Call the callback function to trigger useEffect in DisplayPosts
    } catch (err) {
      console.log(err);
    }
  };

  const handleHover = () => {
    setIsBig(true);
  };

  const handleLeave = () => {
    setIsBig(false);
  };

  return (
    <div className="">
      <div
        className="shadow-lg rounded-lg p-3 bg-white h-full w-fit"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="flex justify-between ">
          <h2 className="text-xl font-semibold mb-1">{name}</h2>
          <div className="flex justify-between">
            {/* <button className="mr-1" onClick={handleEdit}>
              <EditIcon className="w-1 h-1" />
            </button> */}

            <button className="mr-1" onClick={handleDelete}>
              <DeleteIcon className="w-1 h-1" />
            </button>
          </div>
        </div>
        {isBig && (
          <div>
            <p className="text-gray-600 mb-1">{message}</p>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
