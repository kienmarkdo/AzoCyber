import {
  Menu,
  MenuItem,
  MenuDivider,
  Button,
  ButtonGroup,
  Card,
  Icon,
  Position,
  Tooltip,
  Tag,
} from "@blueprintjs/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import resourceData from "../mockData/resourceData.json";

export default function Resources() {
  const navigate = useNavigate();

  const routeToSolutions = () => {
    navigate("/solutions");
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
            <HashLink smooth to="/resources/#azocyber_resources">
              <MenuItem icon="selection" text="AzoCyber Resources" />
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
      <section id="azocyber_resources" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          AzoCyber Resources
        </h2>
        <hr className="shortHr" />
        <div className="headerMarginBottom" />
        <Card className="filterResults">
          <h3 className="bp4-heading headerMarginBottom">Filter Results</h3>
          <h4 className="bp4-heading thinnerText">
            Select Organization Type{" "}
            <Tooltip
              content="Select Audience Type"
              position={Position.RIGHT}
              openOnTargetFocus={true}
            >
              <Icon icon="help" style={{ marginBottom: "3px" }} />
            </Tooltip>
          </h4>
          <ButtonGroup large={true}>
            {ORGANIZATION_TYPE_OPTIONS.map((org) => {
              return (
                <Button
                  onClick={() => setOrganizationType(org)}
                  active={organizationType === org ? true : false}
                >
                  {org}
                </Button>
              );
            })}
          </ButtonGroup>
          <div className="headerMarginBottom" />
          <h4 className="bp4-heading thinnerText">Select Resource Type </h4>
          <ButtonGroup large={true}>
            {RESOURCE_TYPE.map((resource) => {
              return (
                <Button
                  onClick={() => setResourceType(resource)}
                  active={resourceType === resource ? true : false}
                >
                  {resource}
                </Button>
              );
            })}
          </ButtonGroup>
        </Card>
        <div className="headerMarginBottom" />
        <article
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 10px",
          }}
        >
          <h2 className="bp4-heading">Search Result:</h2>
          {resourceData.map((res) => {
            if (
              organizationType === "All Organization Types" &&
              resourceType === "All Resource Types"
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Organization Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="primary"
                    >
                      {res.organization_type}
                    </Tag>
                  </h4>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Resource Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="success"
                    >
                      {res.resource_type}
                    </Tag>
                  </h4>
                </Card>
              );
            } else if (
              organizationType === res.organization_type &&
              resourceType === "All Resource Types"
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Organization Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="primary"
                    >
                      {res.organization_type}
                    </Tag>
                  </h4>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Resource Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="success"
                    >
                      {res.resource_type}
                    </Tag>
                  </h4>
                </Card>
              );
            } else if (
              organizationType === "All Organization Types" &&
              resourceType === res.resource_type
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Organization Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="primary"
                    >
                      {res.organization_type}
                    </Tag>
                  </h4>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Resource Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="success"
                    >
                      {res.resource_type}
                    </Tag>
                  </h4>
                </Card>
              );
            } else if (
              organizationType === res.organization_type &&
              resourceType === res.resource_type
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Organization Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="primary"
                    >
                      {res.organization_type}
                    </Tag>
                  </h4>
                  <h4 className="bp4-heading thinnerText">
                    <strong>Resource Type:</strong>{" "}
                    <Tag
                      minimal={true}
                      large={true}
                      round={true}
                      intent="success"
                    >
                      {res.resource_type}
                    </Tag>
                  </h4>
                </Card>
              );
            } else {
              return <></>;
            }
          })}
        </article>
      </section>
      <div style={{ marginBottom: "300px" }} />
    </>
  );
}
