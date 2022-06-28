import {
  Menu,
  MenuItem,
  MenuDivider,
  Button,
  FormGroup,
  InputGroup,
  ControlGroup,
  HTMLSelect,
} from "@blueprintjs/core";
import { IItemRendererProps, MultiSelect2 } from "@blueprintjs/select";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import { SelectExample } from "../mockData/SelectExample";
// import MultiSelect from "../components/MultiSelect";

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

  const ORGANIZATION_TYPE_OPTIONS = [
    "All Organization Types",
    "Small Businesses",
    "Large Organizations",
    "Government",
    "Academia",
  ];

  const RESOURCE_TYPE = [
    "All Resource Types",
    "Journal",
    "Article",
    "Tutorial",
  ];

  const [organizationType, setOrganizationType] = useState(
    ORGANIZATION_TYPE_OPTIONS[0]
  );
  const [resourceType, setResourceType] = useState(RESOURCE_TYPE[0]);

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
            From learning the basics to analyzing in-depth reports, AzoCyber has
            it all.
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
      <section id="find_resource" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Our Resources
        </h2>
        <hr className="shortHr" />
        <section className="splitScreenContainer">
          <div className="splitScreenItemOne">
            <h3 className="bp4-heading headerMarginBottom">
              AzoCyber Resources
            </h3>
            <ControlGroup vertical={false}>
              <h4
                className="bp4-heading thinnerText"
                style={{ marginRight: "20px", width: "150px" }}
              >
                Organization Type
              </h4>{" "}
              <HTMLSelect
                style={{ width: "300px" }}
                options={ORGANIZATION_TYPE_OPTIONS}
                onChange={(e) => setOrganizationType(e.currentTarget.value)}
              />
            </ControlGroup>
            <br />
            <ControlGroup vertical={false}>
              <h4
                className="bp4-heading thinnerText"
                style={{ marginRight: "20px", width: "150px" }}
              >
                Resource Type
              </h4>{" "}
              <HTMLSelect
                style={{ width: "300px" }}
                options={RESOURCE_TYPE}
                onChange={(e) => setResourceType(e.currentTarget.value)}
              />
            </ControlGroup>
            <br />
          </div>
          <div className="splitScreenItemTwo">
            <h1>{organizationType}</h1>
            <h1>{resourceType}</h1>
          </div>
        </section>
      </section>
      <div style={{ marginBottom: "300px" }} />
    </>
  );
}
