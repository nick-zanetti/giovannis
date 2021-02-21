import { useAppContext } from "../context/state";
import { useEffect } from "react";

const populateCart = () => {
  const { cartitems, cartDispatch } = useAppContext();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartitems"));
    if (cartData) {
      cartDispatch({ type: "POPULATE_CART", cartitems: cartData });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  });
};

const getSubtotal = () => {
  const { subtotal, setSubtotal } = useAppContext();

  useEffect(() => {
    const subTotalData = JSON.parse(localStorage.getItem("subtotal"));
    if (subTotalData) {
      setSubtotal(subTotalData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("subtotal", subtotal);
  });
};

export { populateCart as default, getSubtotal };
