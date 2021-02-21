import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="mb-3" bg="light" variant="light">
      <Navbar.Brand>Giovanni's Restaurant</Navbar.Brand>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/order">Order</Nav.Link>
      <Nav.Link href="/checkout">Checkout</Nav.Link>
    </Navbar>
  );
};

export default NavBar;
