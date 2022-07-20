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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import i18n from "../i18n";
import resourceDataEN from "../mockData/resourceData_en.json";
import resourceDataFR from "../mockData/resourceData_fr.json";

export default function Resources() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const resourceData = i18n.language.startsWith("en")
    ? resourceDataEN
    : resourceDataFR;

  const routeToSolutions = () => {
    navigate("/AzoCyber/solutions");
  };

  const ORGANIZATION_TYPE_OPTIONS = [
    t("allOrganizationTypes"),
    t("smallBusinesses"),
    t("largeOrganizations"),
    t("government"),
    t("academia"),
  ];

  const RESOURCE_TYPE = [
    t("allResourceTypes"),
    t("journal"),
    t("article"),
    t("tutorial"),
  ];

  const [organizationType, setOrganizationType] = useState(
    ORGANIZATION_TYPE_OPTIONS[0]
  );

  const [resourceType, setResourceType] = useState(RESOURCE_TYPE[0]);

  return (
    <>
      <section className="topSectionContainer">
        <div className="topSectionItemOne">
          <h1 className="bp4-heading">{t("navResources")}</h1>
          <br />
          <h3
            className="bp4-heading bp4-blockquote thinnerText"
            style={{ /*width: "40%",*/ fontStyle: "oblique" }}
          >
            {t("resourcesQuote")}
          </h3>
          <br />
          <h4 className="bp4-heading thinnerText" /*style={{ width: "40%" }}*/>
            {t("resourcesDescription")}
          </h4>
        </div>
        <div className="topSectionItemTwo">
          <Menu large={true}>
            <HashLink smooth to="#azocyber_resources">
              <MenuItem icon="selection" text={t("azoCyberResources")} />
            </HashLink>
          </Menu>
          <Button
            className="topSectionRouteButton"
            large={true}
            intent="success"
            onClick={routeToSolutions}
          >
            {t("goToSolutions")}
          </Button>
        </div>
      </section>
      <section id="azocyber_resources" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          {t("azoCyberResources")}
        </h2>
        <hr className="shortHr" />
        <div className="headerMarginBottom" />
        <Card className="filterResults">
          <h3 className="bp4-heading headerMarginBottom">
            {t("filterResults")}
          </h3>
          <h4 className="bp4-heading thinnerText">
            {t("selectOrganizationType")}{" "}
            <Tooltip
              content={t("selectAudienceType")}
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
          <h4 className="bp4-heading thinnerText">
            {t("selectResourceType")}{" "}
          </h4>
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
          <h2 className="bp4-heading">{t("searchResults")}:</h2>
          {resourceData.map((res) => {
            if (
              organizationType === t("allOrganizationTypes") &&
              resourceType === t("allResourceTypes")
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>{t("organizationType")}:</strong>{" "}
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
                    <strong>{t("resourceType")}:</strong>{" "}
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
              resourceType === t("allResourceTypes")
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>{t("organizationType")}:</strong>{" "}
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
              organizationType === t("allOrganizationTypes") &&
              resourceType === res.resource_type
            ) {
              return (
                <Card style={{ height: "200px", flexBasis: "100%" }}>
                  <h3 className="bp4-heading" style={{ color: "#EC9A3C" }}>
                    {res.title}
                  </h3>
                  <h4 className="bp4-heading thinnerText">
                    <strong>{t("organizationType")}:</strong>{" "}
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
                    <strong>{t("resourceType")}:</strong>{" "}
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
                    <strong>{t("organizationType")}:</strong>{" "}
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
                    <strong>{t("resourceType")}:</strong>{" "}
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
