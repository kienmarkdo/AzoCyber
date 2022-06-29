//* import from packages
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"; // browser router v6 package
import { Alignment, Button, Navbar } from "@blueprintjs/core";

//* Import components and pages
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
import GetQuote from "./pages/GetQuote";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar
          style={{ padding: "0px 100px 0px 100px" }}
          className="bp4-navbar bp4-dark"
        >
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <NavLink to="home">
                <img
                  src="https://media.discordapp.net/attachments/983190148206428190/990770824090882148/Azocyber_upper.png"
                  alt="Logo cyber with text"
                  height="40"
                />
              </NavLink>
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
            {/* <NavLink to="careers">
              <Button className="bp4-minimal" text="Careers" />
            </NavLink> */}
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <NavLink to="get_a_quote">
              <Button
                className="bp4-button"
                intent="primary"
                text="Get a Quote"
              />
            </NavLink>

            <Navbar.Divider />

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
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/get_a_quote" element={<GetQuote />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
