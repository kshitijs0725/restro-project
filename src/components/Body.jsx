import Rescard from "./Rescard";
import restroList from "../utils/data";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restroList);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleButtonClick = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >4.1
           )
           setListOfRestaurants(filteredList)
        setIsButtonClicked(true);
    } 
    console.log("Body Rendered");
    
    return (
        <div className="body">
            <div className="filter">
                <div className="search-box">
                    <input type="text" placeholder="Search by restaurants" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {
                    const filteredRestros = listOfRestaurants.filter(
                        (restros)=> restros.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setListOfRestaurants(filteredRestros)

                    }}
                    >Search</button>
                </div> 
                
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