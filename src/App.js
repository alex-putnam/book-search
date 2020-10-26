import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  state = {
    searchTerm: '',
    printType: 'all',
    bookType: '',
    resultsList: [],
  };

  valueChanged(objKey, objVal) {
    this.setState({
      [objKey]: objVal,
    });
  }

  searchBooks(e) {
    e.preventDefault();
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const key = process.env.apiToken;
    const params = {
      q: this.state.searchTerm,
      printType: this.state.printType,
      key: key,
    };
    if (this.state.bookType.length > 1) {
      params.filter = this.state.bookType;
    }
    const queryString = this.formatQueryParams(params);
    const search = `${url}?${queryString}`;
    fetch(search)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          resultsList: data.items,
        });
      });
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join('&');
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Google Book Search</h1>
          <SearchForm
            onSearch={this.searchBooks.bind(this)}
            valueChanged={this.valueChanged.bind(this)}
            searchTerm={this.state.searchTerm}
          />
        </header>
        <main>
          <ResultsList resultsList={this.state.resultsList} />
        </main>
        <footer>©2020 Developed By Alex Putnam</footer>
      </div>
    );
  }
}

export default App;
