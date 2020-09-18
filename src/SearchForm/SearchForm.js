import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterOptions from "../FilterOptions/FilterOptions";

export default class SearchForm extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.onSearch(e)}>
        <SearchBar
          valueChanged={this.props.valueChanged}
          searchTerm={this.props.searchTerm}
        />
        <FilterOptions valueChanged={this.props.valueChanged} />
      </form>
    );
  }
}
