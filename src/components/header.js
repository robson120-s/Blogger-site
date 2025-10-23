import React from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleCreateBlog = () => {
    navigate('/create'); // Navigate to the create page
  };

  return (
    <div className="App-header head">
      <h1 className="text-white ">Blog Application</h1>
      <div className=" d-flex">
        <button 
          className="btn btn-warning p-3 m-2 rounded rounded-5"
          onClick={handleCreateBlog} // Add onClick handler
        >
          <AiFillPlusCircle size={22} /> 
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default Header;