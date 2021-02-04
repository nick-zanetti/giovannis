import Link from "next/link";
import { useAppContext } from "./context/state";
import { useEffect } from "react";
import OrderItem from "./components/OrderItem";

const OrderPage = () => {
  const {
    menuitems,
    setMenuItem,
    cartitems,
    setCartItem,
    show,
    setShow,
    modalItem,
    setModalItem,
  } = useAppContext();

  //get cart items from local storage and store new cart items in local storage

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartitems"));
    if (cartData) {
      setCartItem(cartData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  });
  const renderedMenu = menuitems.map((item) => (
    <div
      key={item.title}
      onClick={() => {
        setShow(true);
        setModalItem(item.title);
      }}
    >
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  ));

  return (
    <div>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <div>{renderedMenu}</div>
      <OrderItem />
    </div>
  );
};

export default OrderPage;
