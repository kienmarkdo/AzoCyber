//* import components
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap"; // react bootstrap library components
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom"; // browser router v6 package

//* Import main pages (sections of website)
import Home from "./components/Home";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Careers from "./components/Careers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          className="navbarStyle"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Image
                src="https://media.discordapp.net/attachments/983190148206428190/990470017814523935/Azocyber_grad2.png"
                alt=""
                height="50"
              />{" "}
              AzoCyber
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/solutions">
                  Solutions
                </Nav.Link>
                <Nav.Link as={Link} to="/resources">
                  Resources
                </Nav.Link>
                <Nav.Link as={Link} to="/careers">
                  Careers
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/contact">
                  <Button variant="success">Contact Us</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* =================================================== */}
        <div>
          <Routes>
            {/* <Route exact path="/AzoCyber/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
