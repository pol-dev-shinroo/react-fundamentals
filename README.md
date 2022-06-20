# React fundamentals

## Preview

-   [Folder structure](#1-folder-structure-for-react-app)
-   [JSX](#2-jsx)
-   [Accessing Javascript in the JSX](#3-accessing-javascript-in-jsx)
-   [Props](#4-props)
-   [ES6](#5-es6)

## 1. Folder structure for react app

-   **node modules**: where we keep all dependencies (best practice is to ignore this file for git)
-   **package.json**: it is the manifest file (ex. dependencies),
    ```bash
        npm install
    ```
    it will check the dependencies listed in package.json and install all our dependencies (npm run is possible even without node_modules)
-   **index.html** in public folder: (just a regular html file)
    -   can change title
    -   cdn import
    -   div id="root" is where our whole javascript application is going in
-   **build folder** is the mirror of our react app that is production-ready. (should also ignore for git)

    ```bash
        npm build
    ```

## 2. JSX

It provides ways to structure react component using syntax familiar to HTML

```js
const App = () => {
    return <h1></h1>;
};
const Nested = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};
```

**is basically same as:**

```js
const App = () => {
    return React.createElement("h1", {}, "hello world");
};
// second argument is for props

// for nested component it would be:
const Nested = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "hello world")
    );
};
```

**JSX Rules**

-   return single element (ex. Fragment or <></>)
-   use camelCase for html attributes (ex. className, onClick)

## 3. Accessing Javascript in JSX

Use curly braces (**{}**) to access Javascrpt within JSX

-   **for inline style**

```js
const App = () => {
    return;
    <h1 style={{}}></h1>;
};
```

-   **passing variable that returns a value**

```js
let x = 1;
const App = () => {
    return;
    <h1>{x}</h1>;
};
```

-   **invoking functions**

```js
// can invoke function
const myFunction = () => {
    console.log("hello");
};

const App = () => {
    return <h1>{myFunction()}</h1>;
};

const App = () => {
    return <h1>{console.log(x)}</h1>;
};
```

**This does not work!**

```js
const App = () => {
return;
<h1>{let y; console.log(y)}</h1>;
};
// cannot create a variable here
```

## 4. Props

-   **Javascript function has parameters and arguments, meaning you can pass something into a function**

```js
const App = (props) => {
    return <h1>{console.log(props)}</h1>;
};
// logs out an empty object which we can access within the JSX component
```

-   **The name "props" is just the convention**

```js
const App = (banana) => {
    return <h1>{console.log(banana)}</h1>;
};
```

-   **pass props where you render it**

```js
const RenderingComponent = () => {
    return <App banana="value" />;
};
// logs out {banana: "value"} at App component
```

-   **"children" is a **reserved name** when passing child elements as props**

```js
const BookList = () => {
    return (
        <section className="booklist">
            <Book>
                <p>children</p>
            </Book>
        </section>
    );
};

const Book = ({ children }) => {
    return <article className="book">{children}</article>;
};
```

## 5. ES6

-   **Destructuring**

```js
const Book = (props) => {
    const { img, title, author } = props;

    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};
```

-   **Destructuring in parameter**

```js
const Book = ({ img, title, author }) => {
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};
```

-   **Map method**

```js
const BookList = () => {
    return (
        <section className="booklist">
            {books.map((item) => {
                const { img, title, author } = item;
                return <Book img={img} title={title} author={author} />;
            })}
        </section>
    );
};
```

## 🔹Questions🔹

**Why use bracket for return❔**

```js
// if you dont use bracket, this might happen:
const App = () => {
    return;
    <h1></h1>;
};
```

**Why choose styled-components over normal .css❔**

-   readability + reusability + expandability + adaptability

## new terms I've learnt

-   **Boilerplate code/ boilderplate**: it refers to code which sets up the basic frame for your project. "create-react-app" is an example of boilerplate code. it makes life easier (ex. without it, a programmer would have to write a lot of code to do only minimal/ verbose jobs) || boilerplate itself is the basic frame (ex. basic set up that is provided via create-react-app)

-   **ReactDom**: it is the glue between React and DOM => it is used when mounting your react application to the index.html. It comes with the render method.

-   **JSX**: it is a syntax extension to Javascript used for React app. It provides a way to structure react component using syntax familiar to HTML

-   **stateless vs stateful components**: whether a component has state or not

```bash
    import ReactDom from "react-dom"
```

## useful extensions

-   ES7 +
    -   automatically generates components
    -   key keyword: "rafc" => for arrow function
