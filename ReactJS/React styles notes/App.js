//different ways to apply styles in React

import React from 'react';

//(2) this is external CSS, we need to import App.css file . this consists of 2 types that is class and id
//id is used to apply styles to a single element, class is used to apply styles to multiple elements
//id is defined by # and class is defined by .
import './App.css';

function App() {

  //(1)This is Internal CSS, we can use this to apply styles to a single element
  const buttonstyle = {
    color: "orange",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    margin: "20px",
  }

  return (
        //(1)This is internal CSS, we can use this to apply styles to a single element and the properties are defined in the style attribute
    <>
    <button style={buttonstyle}>clickkk me</button>
    {/*(2)This is external CSS, we can use this to apply styles to a single element using id*/}
    <button id="buttonstyle1">external style using id</button>
    {/*(2)This is external CSS, we can use this to apply styles to multiple elements using class*/}
    <button className="buttonstyle3">external class using class</button>'
    {/*(3)This is inline CSS, we can use this to apply styles to a single element and the properties are defined in the style attribute*/}
    <button style={{color:"red",backgroundColor:"cyan", margin: "20px", padding: "10px", borderRadius: "5px", border: "none", fontSize: "16px", cursor: "pointer"}}>inline style</button>
    </>
  )
}

export default App;



function App() {
    const name ="koyel";
    const city = "kolkata";

    const greet = () => {
        return `Hello ${name} from ${city}`;
    }
    return (
        <>
        <h1> hi {name}</h1>
        <p> are you from {city}</p>
        <p>{greet()}</p>
        {/* Conditional rendering example */}
        </>
    )
//     const isStudent = true;
//     if (isStudent) {
//         return <p> welcome to mern training</p>
//     }
//     else {
//         return <p> please enroll for the course</p>
//     }
// //
//     const isLoggedIn = true;
// return (
//     <>
//     <h1> hi {name}</h1>
//     <p> are you from {city}</p>
//     <p>{greet()}</p>
//     <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
//     {/* Conditional rendering example */}
//     </>
// )
}
export default App;