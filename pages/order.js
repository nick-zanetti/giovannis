import Link from "next/link";
import { useAppContext } from "./context/state";
import { useEffect } from "react";
import OrderItem from "./components/OrderItem";
import populateCart from "./functions/populateCart";

const OrderPage = () => {
  const {
    menuitems,
    cartitems,
    cartDispatch,
    setShow,
    dispatch,
  } = useAppContext();

  //get cart items from local storage and store new cart items in local storage

  populateCart();

  //function for adding an item to the modal state
  const addModalItem = (item) => {
    dispatch({
      type: "ADD_MODAL_ITEM",
      title: item.title,
      description: item.description,
      buttonText: "Add Item",
      mod1: item.mod1,
      mod2: item.mod2,
      mod1Add: item.mod1Add,
      mod2Add: item.mod2Add,
    });
  };

  const renderedMenu = menuitems.map((item, index) => (
    <div
      key={index}
      onClick={() => {
        setShow(true);
        addModalItem(item);
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
      <Link href="/cart">
        <a>Cart({cartitems.length})</a>
      </Link>
    </div>
  );
};

export default OrderPage;
