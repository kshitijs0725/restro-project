import cart from "../Assets/cart.png";
import home from "../Assets/home.png";
import profile from "../Assets/Profile.png";
import logo from "../Assets/logo.jpg"
import { useState } from "react";


const Header = () =>{
    const nav = [{id: "Home", image: home }, {id: "Profile", image: profile}, {id: "Cart", image: cart }];
    const [btnName, setBtnName] = useState("Login");
    
    return (
        <div className="header">
            <div>
            <a href="/"> <img  className="logo" src={logo}/> </a>
            </div>
            <div className="nav-items">
                <a href ="/" className="nav-logos">
                <ul>
                   {nav.map(a => <li><img className="icon" src={a.image}></img> </li>)}
                </ul>
                </a>
                <button className="login-btn" onClick={() => 
                    {btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
            </div>
        </div>
    );
};
export default Header;