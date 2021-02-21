import { useAppContext } from "../context/state";
import Topnav from "../components/Navbar";
import OrderItem from "../components/OrderItem";
import populateCart, { getSubtotal } from "../functions/populateCart";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  Container,
  Col,
  Row,
  Navbar,
  ListGroup,
  ListGroupItem,
  Nav,
} from "react-bootstrap";

const OrderPage = () => {
  const {
    menuitems,
    cartitems,
    cartDispatch,
    setShow,
    modalitem,
    dispatch,
    appmenuitems,
    dessertmenuitems,
    subtotal,
    setSubtotal,
  } = useAppContext();

  //get cart items from local storage and store new cart items in local storage

  populateCart();
  getSubtotal();

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
      price: item.price,
    });
  };

  const modifyModalItem = (item) => {
    dispatch({
      type: "ADD_MODAL_ITEM",
      buttonText: "Update Item",
      title: item.title,
      description: item.description,
      buttonText: "Update Item",
      mod1: item.mod1,
      mod2: item.mod2,
      mod1Add: item.mod1Add,
      mod2Add: item.mod2Add,
      price: item.price,
    });
  };

  const removeItem = (item) => {
    cartDispatch({
      type: "REMOVE_CARTITEM",
      id: item.id,
    });
    setSubtotal(subtotal - item.price);
  };

  const renderedCart = cartitems.map((item, index) => {
    const Mod1 = (props) => {
      const mod1 = props.mod1;
      const mod1Add = props.mod1Add;
      if (mod1Add) {
        return (
          <small>
            <p className="text-muted">{mod1}</p>
          </small>
        );
      } else return "";
    };

    const Mod2 = (props) => {
      const mod2 = props.mod2;
      const mod2Add = props.mod2Add;
      if (mod2Add) {
        return (
          <small>
            <p className="text-muted">{mod2}</p>
          </small>
        );
      } else return "";
    };
    return (
      <ListGroupItem className="d-flex justify-content-between" key={item.id}>
        <Col>
          <p>{item.title}</p>
          <Mod1 mod1={item.mod1} mod1Add={item.mod1Add} />
          <Mod2 mod2={item.mod2} mod2Add={item.mod2Add} />
        </Col>
        <Col lg={3}>{item.price}</Col>
        <Col>
          <Button
            onClick={() => {
              removeItem(item);
            }}
          >
            x
          </Button>{" "}
          <Button
            onClick={() => {
              removeItem(item);
              setShow(true);
              modifyModalItem(item);
            }}
          >
            Modify
          </Button>
        </Col>
      </ListGroupItem>
    );
  });

  const renderedMenu = menuitems.map((item, index) => (
    <Col>
      <div
        key={index}
        onClick={() => {
          setShow(true);
          addModalItem(item);
        }}
      >
        <Card className="mb-3 ">
          <Card.Body className="order-card">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-muted">{item.description}</Card.Text>
            <Card.Text className="text-muted">{item.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  ));

  const renderedAppMenu = appmenuitems.map((item, index) => (
    <Col>
      <div
        key={index}
        onClick={() => {
          setShow(true);
          addModalItem(item);
        }}
      >
        <Card className="mb-3 ">
          <Card.Body className="order-card">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-muted">{item.description}</Card.Text>
            <Card.Text className="text-muted">{item.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  ));

  const renderedDessertMenu = dessertmenuitems.map((item, index) => (
    <Col>
      <div
        key={index}
        onClick={() => {
          setShow(true);
          addModalItem(item);
        }}
      >
        <Card className="mb-3 ">
          <Card.Body className="order-card">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-muted">{item.description}</Card.Text>
            <Card.Text className="text-muted">{item.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  ));

  return (
    <div id="container">
      <Topnav />
      <Container>
        <Row>
          <Col lg={7}>
            <h3>Appetizers</h3>
            <Row lg={2} md={1} sm={1} xs={1}>
              {renderedAppMenu}
            </Row>
            <h3>Entrees</h3>
            <Row lg={2} md={1} sm={1} xs={1}>
              {renderedMenu}
            </Row>
            <h3>Desserts</h3>
            <Row lg={2} md={1} sm={1} xs={1}>
              {renderedDessertMenu}
            </Row>
          </Col>
          <Col>
            <Card>
              <Card.Header>Your Order ({cartitems.length})</Card.Header>
              <ListGroup className="list-group-flush">{renderedCart}</ListGroup>
              <Card.Body>Subtotal: ${subtotal.toFixed(2)}</Card.Body>
              <Card.Body>
                <Card.Link href="/checkout">Checkout</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <OrderItem />
      </Container>

      <style type="text/css">{`
        .order-card:hover {
          cursor: pointer;
          background-color: rgb(128,128,128,.1);
        }
       
      `}</style>
    </div>
  );
};

export default OrderPage;
