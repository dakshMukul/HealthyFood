import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Loader from "./Loader";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantsMenu(id);

  if (resInfo === null) {
    return <Loader />;
  }

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="RestMenu-container w-7/12 m-auto mt-24">
      <div className="restaurant-details flex justify-between mb-10">
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-gray-600">{cuisines.join(", ")}</p>
          <p className="text-gray-600">{areaName}</p>
        </div>
        <div className="restaurant-rating rounded-md border border-gray-400 flex flex-col items-center p-2">
          <div className="ratingStar border-b-2 pb-2">
            <i class="fa-solid fa-star mr-2 text-orange-500"></i>
            {avgRatingString}
          </div>
          <p className="text-gray-600">{totalRatingsString}</p>
        </div>
      </div>
      <hr />
      <div className="manu-container mt-4 bg-gray-200">
        {category.map((category, index) => {
          return (
            <ResCategory key={index} categoryItems={category?.card?.card} />
          );
        })}
      </div>
    </div>
  );
};

export default RestMenu;
