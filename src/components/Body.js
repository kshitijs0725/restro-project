import Rescard from "./Rescard";
import restroList from "../utils/data";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState(restroList);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const handleButtonClick = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >4.1
           )
           setListOfRestaurants(filteredList)
        setIsButtonClicked(true);
    } 
  
    return (
        <div className="body">
            <div className="filter">
                <button className={`fltrbtn ${isButtonClicked ? 'clicked' : ''}`}
                onClick={handleButtonClick}
                >Top Rated Restaurants</button>
            </div>
            <div className={`restro-container ${isButtonClicked ? 'clicked-container': ''}`}>
                {listOfRestaurants.map((restaurants) => 
                <Rescard {...restaurants.info}  key={restaurants.info.id} />
                )}
            </div>
       </div>
    );
};
export default Body;