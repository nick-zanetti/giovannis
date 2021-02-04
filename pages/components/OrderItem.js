import Link from "next/link";
import { useAppContext } from "../context/state";
import { useState } from "react";

const OrderItem = () => {
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

  const addCartItem = (itemToAdd) => {
    setCartItem([...cartitems, itemToAdd]);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showHideClassName = show
    ? "order-item display-block"
    : "order-item display-none";

  return (
    <div className={showHideClassName}>
      <section className="order-item-main">
        <p>{modalItem}</p>
        {/* <p>{modalItem.description}</p> */}
        <button onClick={() => addCartItem(modalItem)}>Add Item</button>
        <button onClick={() => hideModal()}>x</button>
      </section>

      <style jsx>{`
         
          .order-item {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
        }
        .order-item-main {
          position: fixed;
          background: white;
          width: 80%;
          height: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        } 
        }
        .display-block {
          display: block;
        }
        .display-none {
          display: none;
        }
         {
          /* .order-item:hover {
          cursor: pointer;
        } */
        }
      `}</style>
    </div>
  );
};

export default OrderItem;
