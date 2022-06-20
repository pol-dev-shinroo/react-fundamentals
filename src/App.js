import React from "react";
import "./App.css";

const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
};
const Image = () => {
    return (
        <div>
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SX331_BO1,204,203,200_.jpg"
                alt=""
            />
        </div>
    );
};
const Title = () => {
    return <h1>It's Not Summer Without You</h1>;
};
const Author = () => {
    return <h4>Jenny Han</h4>;
};

export default BookList;
