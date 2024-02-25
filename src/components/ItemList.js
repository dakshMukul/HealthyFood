import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const ItemCard = (props) => {
  const { itemCards } = props;
  const dispatch = useDispatch();

  return (
    <div>
      {itemCards.map((item, index) => {
        return (
          <div className=" bg-white flex justify-between p-4" key={index}>
            <div className="p-3 w-9/12">
              <span className="font-bold">{item.card.info.name}</span>
              <div>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="mb-4 text-gray-500 text-sm">
                {item.card.info.description}
              </p>
            </div>
            <div className=" p-2 w-3/12 h-32 overflow-hidden  ">
              <div className="absolute hover:scale-105 ">
                <button
                  className="p-1 bg-black text-white shadow-lg   mx-14 rounded-lg my "
                  onClick={() => {
                    dispatch(addItem(item));
                  }}
                >
                  Add+
                </button>
              </div>
              <img
                className="w-full h-full object-cover rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
