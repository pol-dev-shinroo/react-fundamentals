import React from "react";
import "./App.css";

const BookList = () => {
    return (
        <section className="booklist">
            <Book />
        </section>
    );
};

const myFunction = () => {
    console.log(2);
};

const author = "Jenny Han";
const Book = () => {
    const title = "It's Not Summer Without You";
    return (
        <article className="book">
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SX331_BO1,204,203,200_.jpg"
                alt=""
            />
            <h1>{title}</h1>
            <h4>{author.toUpperCase()}</h4>
            <p>{console.log(1)}</p>
            {/* However, below gives an error */}
            {/* <p>{let x = 1; console.log(1)}</p> */}
            <p>{myFunction()}</p>
            <p>{6 + 6}</p>
        </article>
    );
};

export default BookList;
