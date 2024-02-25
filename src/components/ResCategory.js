import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (props) => {
  const { categoryItems } = props;
  const [showItemList, setShowItemList] = useState(false);
  const [down, setDown] = useState(false);

  return (
    <div className="  ">
      <div
        className=" p-2 my-2  flex justify-between bg-white cursor-pointer font-bold text-2xl"
        onClick={() => {
          showItemList ? setShowItemList(false) : setShowItemList(true),
            down ? setDown(false) : setDown(true);
        }}
      >
        <span className="">
          {categoryItems.title} ({categoryItems.itemCards.length})
        </span>

        {down ? (
          <i class="fa-solid fa-angle-up"></i>
        ) : (
          <i class="fa-solid fa-angle-down"></i>
        )}
      </div>
      {showItemList && <ItemList itemCards={categoryItems.itemCards} />}
    </div>
  );
};

export default ResCategory;
