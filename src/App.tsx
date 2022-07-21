//* import from packages
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"; // browser router v6 package
import { Alignment, Button, ButtonGroup, Navbar } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";

//* Import components and pages
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
import GetQuote from "./pages/GetQuote";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import EmployeeChat from "./components/employeeChat/demo/src/index";
import ChatWindow from "./components/ChatWindow";

function App() {
  const { t, i18n } = useTranslation();

  const handleSelectEnglish = (): void => {
    i18n.changeLanguage("en");
  };

  const handleSelectFrench = (): void => {
    i18n.changeLanguage("fr");
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatWindow />
      <div className="App">
        <Navbar
          style={{ padding: "0px 100px 0px 100px" }}
          className="bp4-navbar bp4-dark"
        >
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <NavLink to="/AzoCyber">
                <img
                  src="https://media.discordapp.net/attachments/983190148206428190/990770824090882148/Azocyber_upper.png"
                  alt="Logo cyber with text"
                  height="40"
                />
              </NavLink>
            </Navbar.Heading>

            <Navbar.Divider />

            <NavLink to="/AzoCyber/home">
              <Button className="bp4-minimal" text={t("navHome")} />
            </NavLink>
            <NavLink to="/AzoCyber/about">
              <Button className="bp4-minimal" text={t("navAbout")} />
            </NavLink>
            <NavLink to="/AzoCyber/solutions">
              <Button className="bp4-minimal" text={t("navSolutions")} />
            </NavLink>
            <NavLink to="/AzoCyber/resources">
              <Button className="bp4-minimal" text={t("navResources")} />
            </NavLink>
            {/* <NavLink to="/AzoCyber/careers">
              <Button className="bp4-minimal" text="Careers" />
            </NavLink> */}
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <ButtonGroup>
              <NavLink to="/AzoCyber/get_a_quote">
                <Button
                  className="bp4-button"
                  intent="primary"
                  text={t("navGetAQuote")}
                />
              </NavLink>

              <div style={{ width: "10px" }} />

              <NavLink to="/AzoCyber/contact">
                <Button
                  className="bp4-button"
                  intent="success"
                  text={t("navContactUs")}
                />
              </NavLink>

              <Navbar.Divider style={{ marginTop: "5px" }} />

              <NavLink to="/AzoCyber/employee_chat">
                <Button
                  className="bp4-button"
                  intent="danger"
                  text={t("emergency")}
                />
              </NavLink>

              <Navbar.Divider style={{ marginTop: "5px" }} />

              <Button
                key="english"
                text="EN"
                onClick={handleSelectEnglish}
                active={i18n.language.startsWith("en")}
              />
              <Button
                key="french"
                text="FR"
                onClick={handleSelectFrench}
                active={i18n.language.startsWith("fr")}
              />
            </ButtonGroup>
          </Navbar.Group>
        </Navbar>
        {/* ========================================================================= */}
      </div>
      <main className="bp4-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AzoCyber" element={<Home />} />
          <Route path="/AzoCyber/home" element={<Home />} />
          <Route path="/AzoCyber/about" element={<About />} />
          <Route path="/AzoCyber/solutions" element={<Solutions />} />
          <Route path="/AzoCyber/resources" element={<Resources />} />
          {/* <Route path="/AzoCyber//careers" element={<Careers />} /> */}
          <Route path="/AzoCyber/contact/*" element={<Contact />} />
          <Route path="/AzoCyber/get_a_quote" element={<GetQuote />} />
          <Route path="/AzoCyber/employee_chat" element={<EmployeeChat />} />
          <Route path="/AzoCyber/*" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
