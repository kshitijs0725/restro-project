import { APP_LOGO } from "../utils/constants";
import cart from "../Assets/cart.png";
import home from "../Assets/home.png";
import profile from "../Assets/Profile.png";

const Header = () =>{
    const nav = [{id: "Home", image: home }, {id: "Profile", image: profile}, {id: "Cart", image: cart }];
    return (
        <div className="header">
            <div>
            <a href="/"> <img  className="logo" src={APP_LOGO}/> </a>
            </div>
            <div className="nav-items">
                <ul>
                   {nav.map(a => <li><img className="icon" src={a.image}></img> </li>)}
                </ul>
            </div>
        </div>
    );
};
export default Header;