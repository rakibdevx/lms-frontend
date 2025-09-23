import React from "react";

function Search({ show, handleClose }) {
  return (
    <div className="search-box"
    style={{
        display: show ? "block" : "none",
        transition: "opacity 0.6s ease,visibility 0.6s ease",
        opacity: show ? 1 : 0,
      }}>
        <div className="serach-form">
            <div className="closebtn" onClick={handleClose}>
                <span></span>
                <span></span>
            </div>
            <form action="#">
                <input type="text" placeholder="Search by keyword"/>
                <button><i className="fa fa-search"></i></button>
            </form>
        </div>
    </div>

  );
}

export default Search;
