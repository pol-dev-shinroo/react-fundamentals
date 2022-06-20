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

export default Book;
