import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItem } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container w-7/12  p-4, m-4 mx-auto mt-24">
      <div className="text-center ">
        <h1 className=" font-bold text-lg">Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="text-center">Your cart is empty, do some shoping!</h1>
      ) : (
        <button
          className="font-bold border border-red-300 bg-red-300 rounded-lg px-2"
          onClick={() => {
            dispatch(removeItem());
          }}
        >
          Clear Cart
        </button>
      )}

      <div className=" ">
        <ItemList itemCards={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
