import { RES_LOGO } from "../utils/constants";

const Rescard = ({cloudinaryImageId, name, avgRating, locality, cuisines, deliveryTime, costForTwo}) => {
    return (
        <div className= "restro-cards">
            <img className="restro-logo" alt ="restro-logo" src= {RES_LOGO+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{locality}</h5>
            <h5>{deliveryTime}</h5>
            <h4>{costForTwo}</h4>
        </div>
    );
    }
export default Rescard;