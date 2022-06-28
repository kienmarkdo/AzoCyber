import { Menu, MenuItem, MenuDivider, Button } from "@blueprintjs/core";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function Resources() {
  const navigate = useNavigate();

  const routeToSolutions = () => {
    navigate("/solutions");
  };

  const routeToContact = () => {
    navigate("/contact");
  };

  const routeToQuote = () => {
    navigate("/get_a_quote");
  };

  return (
    <>
      <section className="topSectionContainer">
        <div className="topSectionItemOne">
          <h1 className="bp4-heading">Resources</h1>
          <br />
          <h3
            className="bp4-heading bp4-blockquote thinnerText"
            style={{ /*width: "40%",*/ fontStyle: "oblique" }}
          >
            From learning the basics to analyzing in-depth reports, we have it
            all.
          </h3>
          <br />
          <h4 className="bp4-heading thinnerText" /*style={{ width: "40%" }}*/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
        <div className="topSectionItemTwo">
          <Menu large={true}>
            <HashLink smooth to="/resources/#">
              <MenuItem icon="selection" text="Small Businesses" />
            </HashLink>
            <MenuDivider />
            <HashLink smooth to="/resources/#">
              <MenuItem icon="selection" text="Large Organizations" />
            </HashLink>
            <MenuDivider />
            <HashLink smooth to="/resources/#">
              <MenuItem icon="selection" text="Government" />
            </HashLink>
            <MenuDivider />
            <HashLink smooth to="/resources/#">
              <MenuItem icon="selection" text="Academia" />
            </HashLink>
          </Menu>
          <br />
          <br />
          <br />
          <Button large={true} intent="success" onClick={routeToSolutions}>
            Secure Your Business
          </Button>
        </div>
      </section>
    </>
  );
}
