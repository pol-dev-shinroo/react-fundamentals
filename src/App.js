import React from "react";
import "./App.css";

const BookList = () => {
    return (
        <section className="booklist">
            <Book banana="banana" />
            <Book title="name" number={22} />
        </section>
    );
};

const author = "Jenny Han";
const title = "It's Not Summer Without You";
const img =
    "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SX331_BO1,204,203,200_.jpg";
const Book = (props) => {
    console.log(props);
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <p>{props.banana}</p>
            <p>{props.title}</p>
        </article>
    );
};

export default BookList;
