import React from "react";
import './SearchBox.css'

function SearchBar() {
    

    return (
        <div className="search-box-container">
            <input className="search-box " type='search' placeholder="search our vehicles" />
            <i className="ion-md-search black"></i>
        </div>
    )
}

export default SearchBar;