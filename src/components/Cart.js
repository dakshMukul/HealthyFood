import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItem } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="mt-24">
      <div>
        <h1>Cart tems</h1>
      </div>
    </div>
  );
};

export default Cart;
