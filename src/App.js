import React from "react";
import "./App.css";

import { books } from "./books";
import Banana from "./Book";

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Banana key={book.id} {...book} />;
            })}
        </section>
    );
};

export default BookList;
