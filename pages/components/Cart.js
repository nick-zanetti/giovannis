import { useAppContext } from "../context/state";
import populateCart from "../functions/populateCart";
import Link from "next/link";
import OrderItem from "./OrderItem";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const Cart = () => {
  const { cartitems } = useAppContext();

  populateCart();

  const renderedCart = cartitems.map((item) => {
    return (
      <ListGroupItem className="d-flex justify-content-between" key={item.id}>
        <Col>{item.title}</Col>
        <Col>{item.price}</Col>
      </ListGroupItem>
    );
  });

  return (
    <Col>
      <Card>
        <Card.Header>Your Order ({cartitems.length})</Card.Header>
        <ListGroup className="list-group-flush">{renderedCart}</ListGroup>

        <Card.Body>
          <Card.Link href="/cart">Modify Order</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cart;
