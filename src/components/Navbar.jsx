import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-secondary-subtle p-3 mb-2">
      <Nav className="justify-content-evenly py-3">
        <Nav.Item>
          <Link to="/home" className="btn btn-light" style={{ color: "black", padding: "0.5rem 1rem" }}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/Form"
            className="btn btn-light"
            style={{ color: "black", padding: "0.5rem 1rem", background: "#FFFFFF" }}
          >
            Employee Form
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
