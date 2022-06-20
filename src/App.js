import React from "react";
import "./App.css";

const books = [
    {
        id: "0",
        img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SX331_BO1,204,203,200_.jpg",
        title: "It's Not Summer Without You",
        author: "Jenny Han",
    },
    {
        id: "1",
        img: "https://images-na.ssl-images-amazon.com/images/I/41-KzR9ASUL._SX331_BO1,204,203,200_.jpg",
        title: "We'll Always Have Summer",
        author: "Jenny Han",
    },
];

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} {...book} />;
            })}
        </section>
    );
};

const Book = ({ img, title, author }) => {
    const clickHandler = (e) => {
        console.log(e);
    };

    return (
        <article className="book">
            <img src={img} alt="" />
            <h1 onMouseOver={() => console.log("hello world")}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onMouseOver={clickHandler}>
                third
            </button>
        </article>
    );
};

export default BookList;
