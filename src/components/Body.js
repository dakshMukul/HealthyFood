import Loader from "./Loader";
import RestCard from "./RestCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RestaurantsList_Api } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  // const RestCardPromoted = withPromotedLable(restaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RestaurantsList_Api);
    const result = await response.json();
    setRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );

    setFilteredRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  if (onlineStatus === false)
    return (
      <h1>looks like you're offline, Please check your internat connection.</h1>
    );

  if (restaurants.length === 0) {
    return <Loader />;
  }

  return (
    <div className="body ">
      <div className="filter-container flex space-x-10 mt-24 ml-10 ">
        <div className="search-container mx-5 border-b border-black flex m-4 ">
          <input
            className="search-box outline-none "
            type="text"
            placeholder="What's In your mind"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn  rounded-full"
            onClick={() => {
              const filteredData = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredData);
              console.log(filteredData);
            }}
          >
            <i class="fa-solid fa-magnifying-glass mr-2"></i>
            Search
          </button>
        </div>
        <button
          className="filter-btn px-2 li"
          onClick={() => {
            const filterData = restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(filterData);
          }}
        >
          <i class="fa-solid fa-filter mr-2"></i>
          Top Rated
        </button>
      </div>
      <div className="Rest-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {<RestCard restaurants={restaurants} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
