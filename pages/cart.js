import { useAppContext } from "./context/state";
import populateCart from "./functions/populateCart";
import Link from "next/link";
import OrderItem from "./components/OrderItem";

const CartPage = () => {
  const { cartitems, cartDispatch, dispatch, setShow } = useAppContext();

  populateCart();

  const renderedCart = cartitems.map((item, index) => {
    const mod1Display = (item) => {
      return item.mod1Add ? <p>{item.mod1}</p> : <p></p>;
    };
    return (
      <div key={index}>
        <h4>{item.title}</h4>
        <div>{mod1Display(item)}</div>
        <button
          onClick={() =>
            cartDispatch({
              type: "REMOVE_CARTITEM",
              id: item.id,
            })
          }
        >
          Remove
        </button>
        <button
          onClick={() => {
            cartDispatch({
              type: "REMOVE_CARTITEM",
              id: item.id,
            });
            setShow(true);
            dispatch({
              type: "ADD_MODAL_ITEM",
              title: item.title,
              description: item.description,
              mod1: item.mod1,
              mod2: item.mod2,
              mod1Add: item.mod1Add,
              mod2Add: item.mod2Add,
              buttonText: "Update Item",
              price: item.price,
            });
          }}
        >
          Modify
        </button>
      </div>
    );
  });

  return (
    <div>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <div>{renderedCart}</div>
      <Link href="/checkout">
        <a>Checkout</a>
      </Link>
      <OrderItem />
      <Link href="/order">
        <a>Add to Order</a>
      </Link>
    </div>
  );
};

export default CartPage;
