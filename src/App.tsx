//* import components

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom"; // browser router v6 package

//* Import main pages (sections of website)
import Home from "./components/Home";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import { Alignment, Button, Classes, Navbar } from "@blueprintjs/core";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          style={{ padding: "0px 100px 0px 100px" }}
          className="bp4-navbar bp4-dark"
        >
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <img
                src="https://media.discordapp.net/attachments/983190148206428190/990470017814523935/Azocyber_grad2.png"
                alt=""
                height="30"
              />
            </Navbar.Heading>
            <Navbar.Heading>
              <strong>AzoCyber</strong>
            </Navbar.Heading>

            <Navbar.Divider />

            <NavLink to="home">
              <Button className="bp4-minimal" text="Home" />
            </NavLink>
            <NavLink to="about">
              <Button className="bp4-minimal" text="About" />
            </NavLink>
            <NavLink to="solutions">
              <Button className="bp4-minimal" text="Solutions" />
            </NavLink>
            <NavLink to="resources">
              <Button className="bp4-minimal" text="Resources" />
            </NavLink>
            <NavLink to="careers">
              <Button className="bp4-minimal" text="Careers" />
            </NavLink>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <NavLink to="contact">
              <Button
                className="bp4-button"
                intent="success"
                text="Contact Us"
              />
            </NavLink>
          </Navbar.Group>
        </Navbar>
        {/* ========================================================================= */}
      </div>
      <main className="bp4-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AzoCyber/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
