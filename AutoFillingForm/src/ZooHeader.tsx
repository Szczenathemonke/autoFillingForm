import { Navbar, Container, Nav } from "react-bootstrap";
import zooLogo from "./assets/zoo-logo-png-transparent.png";
import navbarHome from "./assets/icons/house.svg";
import navbarAtractions from "./assets/icons/binoculars-fill.svg";
import navbarAboutZoo from "./assets/icons/animal-svgrepo-com.svg";

function ZooHeader() {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand>
          <img src={zooLogo} className="rounded" width="100" alt="ZOO img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              <img src={navbarHome} width="32" /> Home
            </Nav.Link>
            <Nav.Link href="#">
              <img src={navbarAtractions} width="32" /> Atractions
            </Nav.Link>
            <Nav.Link href="#">
              <img src={navbarAboutZoo} width="32" /> About ZOO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ZooHeader;
