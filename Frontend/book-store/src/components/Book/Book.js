import { Button } from "@mui/material";
import "./Book.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const { _id, name, description, price, image, author } = props.book;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(()=>history('/'))
      .then(() => history("/books"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card__data">
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <div className="card__button">
          <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
            Update
          </Button>
          <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Book;
