import React from "react";
import "./App.css";

const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SX331_BO1,204,203,200_.jpg",
    title: "It's Not Summer Without You",
    author: "Jenny Han",
};

const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/41-KzR9ASUL._SX331_BO1,204,203,200_.jpg",
    title: "We'll Always Have Summer",
    author: "Jenny Han",
};

const BookList = () => {
    return (
        <section className="booklist">
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    similique fugiat, incidunt dignissimos iste veniam molestiae
                    quasi tenetur beatae quod?
                </p>
            </Book>
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    );
};

const Book = ({ img, title, author, children }) => {
    console.log(children);
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
        </article>
    );
};

export default BookList;
