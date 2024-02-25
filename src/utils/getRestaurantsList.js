import { RestaurantsList_Api } from "./constants";
import { useState, useEffect } from "react";

const getRestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
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
  };

  return restaurants;
};

export default getRestaurantsList;
