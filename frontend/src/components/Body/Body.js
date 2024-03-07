import "./Body.css";
import logo from "./icon/logo.webp";
function Body () {
    return (
        <>
            <img className="logo" src={logo}></img>
            <h1 className="pp">The Last Will and Testament of Eric Jones</h1>
            <button>Body button</button>
            <p>This is where the body will be</p>
        </>
    )
}

export default Body