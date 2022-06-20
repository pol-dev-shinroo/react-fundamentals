import React from "react";

const App = () => {
    return (
        <>
            <Person />;
            <Message />
        </>
    );
};

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};

export default App;
