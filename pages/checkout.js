import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "../components/Navbar";
import { useAppContext } from "../context/state";
import populateCart, { getSubtotal } from "../functions/populateCart";
import OrderItem from "../components/OrderItem";

import emailjs from "emailjs-com";
import { useState } from "react";

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

const CheckoutPage = () => {
  const {
    cartitems,
    cartDispatch,
    dispatch,
    show,
    setShow,
    subtotal,
    setSubtotal,
  } = useAppContext();

  const [validated, setValidated] = useState(false);

  populateCart();
  getSubtotal();

  function sendEmail(event) {
    console.log("Email function fired");
    emailjs
      .sendForm(
        "service_ghrughr",
        "template_7x9g94c",
        event.target,
        "user_r8Ay4FYsSXSkq1o4bGJtd"
      )
      .then(
        (result) => {
          console.log(result.text);
          redirect();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      event.preventDefault();
      sendEmail(event);
    }
  };

  const redirect = () => {
    window.location.href = "/";
  };

  let order = cartitems.map(
    (item) => `<b>${item.title}</b>...${item.price} <br>`
  );

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

  const renderedCart = cartitems.map((item) => {
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

  return (
    <div>
      <Topnav />
      <Container>
        <h1>Checkout</h1>
        <h3>Delivery Address</h3>
        <Form
          noValidate
          validated={validated}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Row>
            <Col lg={7} className="mb-3">
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" name="first_name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="you@provider.com"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="123 Main St"
                  name="street"
                  required
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control required type="text" name="city" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control required as="select" name="state">
                      <option value="">N/A</option>
                      <option value="AK">Alaska</option>
                      <option value="AL">Alabama</option>
                      <option value="AR">Arkansas</option>
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DC">District of Columbia</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="IA">Iowa</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MD">Maryland</option>
                      <option value="ME">Maine</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MO">Missouri</option>
                      <option value="MS">Mississippi</option>
                      <option value="MT">Montana</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="NE">Nebraska</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NV">Nevada</option>
                      <option value="NY">New York</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VA">Virginia</option>
                      <option value="VT">Vermont</option>
                      <option value="WA">Washington</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WV">West Virginia</option>
                      <option value="WY">Wyoming</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control required type="text" name="zip" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Card>
                <Card.Header>Your Order ({cartitems.length})</Card.Header>
                <ListGroup className="list-group-flush">
                  {renderedCart}
                </ListGroup>
                <Card.Body>Subtotal: ${subtotal.toFixed(2)}</Card.Body>
              </Card>
            </Col>
          </Row>
          <textarea
            style={{ display: "none" }}
            name="items"
            defaultValue={order.join("")}
          />
        </Form>
      </Container>
      <OrderItem />
    </div>
  );
};

export default CheckoutPage;
