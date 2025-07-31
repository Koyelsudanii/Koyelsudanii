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