import Link from "next/link";
import { useAppContext } from "../context/state";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

const OrderItem = () => {
  const {
    cartDispatch,
    dispatch,
    show,
    setShow,
    modalitem,
    subtotal,
    setSubtotal,
  } = useAppContext();

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
      price: item.price,
    });
    setShow(false);
    setSubtotal(subtotal + item.price);
  };

  const toggleMod1 = () => {
    dispatch({
      type: "TOGGLE_MOD_1",
    });
  };

  const toggleMod2 = () => {
    dispatch({
      type: "TOGGLE_MOD_2",
    });
  };

  // const showHideClassName = show
  //   ? "order-item display-block"
  //   : "order-item display-none";

  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalitem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalitem.description}</Modal.Body>
        <Modal.Body>
          <span>
            <input
              type="checkbox"
              checked={modalitem.mod1Add}
              onChange={toggleMod1}
            />
          </span>
          <span>
            {"   "}
            {modalitem.mod1}
          </span>
        </Modal.Body>
        <Modal.Body>
          <span>
            <input
              type="checkbox"
              checked={modalitem.mod2Add}
              onChange={toggleMod2}
            />
          </span>
          <span>
            {"   "}
            {modalitem.mod2}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => addCartItem(modalitem)}>
            {modalitem.buttonText}
          </Button>
        </Modal.Footer>
      </Modal>

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
