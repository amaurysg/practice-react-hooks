import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "../style.css";

const MultipleCustomsHooks = () => {
  const { counter, inc } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log("data fetch1", data);
  const { author, quote } = !!data && data[0];

  //  console.log(loading, data)
  //  console.log(author, quote)

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote ">
          <p className="mb-0"> {quote} </p>
          <hr />
          <footer className="blockquote-footer text-right">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={inc}>
        Next quote
      </button>
    </div>
  );
};

export default MultipleCustomsHooks;
