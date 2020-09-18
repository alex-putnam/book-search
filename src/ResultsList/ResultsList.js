import React, { Component } from "react";
import "./ResultsList.css";
import ItemResult from "../ItemResult/ItemResult";

export default class ResultsList extends Component {
  render() {
    const resultsList = this.props.resultsList.map((itemResult, i) => (
      <ItemResult {...itemResult} key={i} />
    ));

    return <div className="resultsList">{resultsList}</div>;
  }
}

ResultsList.defaultProps = {
  resultsList: [],
};
