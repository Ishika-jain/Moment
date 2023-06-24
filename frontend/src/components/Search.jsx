import React, { useState } from "react";

const Search = ({ onSearch }) => { 
  const [searchid, setSearchid] = useState("");

  const handleChange = (e) => {
    setSearchid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(searchid); 
  };

  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center p-2 rounded-lg">
      <p className="text-center mb-2 md:hidden">Search</p>
      <p className="text-center mb-2 hidden md:block">Search moments here</p>
      <div className="w-full">
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="search moments here"
            className="w-full h-8 md:h-10 px-2 py-1 mb-2 rounded-md"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full h-8 md:h-10 px-2 py-1 bg-blue-900 text-white rounded-md text-xs md:text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
