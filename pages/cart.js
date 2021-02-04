import { useAppContext } from "./context/state";
import { useEffect } from "react";
import Link from "next/link";

const CartPage = () => {
  const { cartitems, setCartItem } = useAppContext();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartitems"));
    if (cartData) {
      setCartItem(cartData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  });

  const renderedCart = cartitems.map((item) => (
    <div>
      <h4>{item}</h4>
    </div>
  ));

  return (
    <div>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <div>{renderedCart}</div>
      <button>Submit Order</button>
    </div>
  );
};

export default CartPage;
