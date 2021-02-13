import Link from "next/link";
import { useAppContext } from "../context/state";

const OrderItem = () => {
  const { cartDispatch, dispatch, show, setShow, modalitem } = useAppContext();

  const addCartItem = (item) => {
    cartDispatch({
      type: "ADD_CARTITEM",
      title: item.title,
      description: item.description,
      mod1: item.mod1,
      mod2: item.mod2,
      mod1Add: item.mod1Add,
      mod2Add: item.mod2Add,
      id: item.id,
    });
    setShow(false);
  };

  const toggleMod1 = () => {
    dispatch({
      type: "TOGGLE_MOD_1",
    });
  };

  const showHideClassName = show
    ? "order-item display-block"
    : "order-item display-none";

  return (
    <div className={showHideClassName}>
      <section className="order-item-main">
        <p>{modalitem.title}</p>
        <p>{modalitem.mod1}</p>{" "}
        <input
          type="checkbox"
          checked={modalitem.mod1Add}
          onChange={toggleMod1}
        />
        <button onClick={() => addCartItem(modalitem)}>
          {modalitem.buttonText}
        </button>
        <button onClick={() => setShow(false)}>x</button>
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
