import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="search"
          id="searchTerm"
          name="searchTerm"
          aria-label="Search through site content"
          value={this.props.searchTerm}
          onChange={(e) =>
            this.props.valueChanged("searchTerm", e.target.value)
          }
        />
        <button>Search</button>
      </div>
    );
  }
}
