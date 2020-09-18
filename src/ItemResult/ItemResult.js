import React from "react";
import "./ItemResult.css";

export default function ItemResult(props) {
  const authors = props.volumeInfo.authors ? (
    <p>Author: {props.volumeInfo.authors.join(", ")}</p>
  ) : (
    ""
  );
  const price = props.saleInfo.listPrice ? (
    <p>Price: ${props.saleInfo.listPrice.amount}</p>
  ) : (
    ""
  );
  const textSnippet = props.searchInfo
    ? props.searchInfo.textSnippet
    : props.volumeInfo.description;

  return (
    <div className="itemResult">
      <div className="bookImage">
        <img
          src={props.volumeInfo.imageLinks.thumbnail}
          alt={props.volumeInfo.title}
        />
      </div>
      <div className="bookInfo">
        <h2>{props.volumeInfo.title}</h2>
        {authors}
        {price}
        <p
          className="textSnippet"
          dangerouslySetInnerHTML={{ __html: textSnippet }}
        ></p>
      </div>
    </div>
  );
}
