import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/*
//Using React.createElement
const heading1 = React.createElement("h1",{id: "primary"},"This is Assignment 1");
const heading2 = React.createElement("h2",{id: "secondary"},"Getting Started");
const heading3 = React.createElement("h3",{id: "heading3"},"Lets do it. Vamoss!!!");

const header = React.createElement("div", {className: "title"}, [heading1, heading2, heading3]);



// Using JSX
const jsx_header = (
    <div className="title">
        
        <h1>This is Assignment 1</h1>
        <h2>Getting Started</h2>
        <h3>Lets go... Vamos!!!!</h3>
    </div>
);


//Using React Component

const Heading = () => {
    return(
        
        <div className="title">
        {jsx_header}
        <h1>This is Assignment 1</h1>
        <h2>Getting Started</h2>
        <h3>Lets go... Vamos!!!!</h3>
    </div>
    );
}





const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(header);
root.render(<Heading />);
//root.render(<Heading />);
*/


