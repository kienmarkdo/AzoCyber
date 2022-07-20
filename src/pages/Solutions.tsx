import { Menu, MenuItem, MenuDivider, Button } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import PackagesOptions from "../components/PackagesOptions";

export default function Solutions() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToContact = () => {
    navigate("/AzoCyber/contact");
  };

  const routeToQuote = () => {
    navigate("/AzoCyber/get_a_quote");
  };

  return (
    <>
      <section className="topSectionContainer">
        <div className="topSectionItemOne">
          <h1 className="bp4-heading">{t("navSolutions")}</h1>
          <br />
          <h3
            className="bp4-heading bp4-blockquote thinnerText"
            style={{ /*width: "40%",*/ fontStyle: "oblique" }}
          >
            {t("solutionsQuote")}
          </h3>
          <br />
          <h4 className="bp4-heading thinnerText" /*style={{ width: "40%" }}*/>
            {t("solutionsDescription")}
          </h4>
        </div>
        <div className="topSectionItemTwo">
          <Menu large={true}>
            <HashLink smooth to="#packages">
              <MenuItem icon="selection" text={t("ourPackages")} />
            </HashLink>
            <MenuDivider />
            <HashLink smooth to="#plans">
              <MenuItem icon="selection" text={t("ourPlans")} />
            </HashLink>
          </Menu>
          <Button
            className="topSectionRouteButton"
            large={true}
            intent="success"
            onClick={routeToQuote}
          >
            {t("navGetAQuote")}
          </Button>
        </div>
      </section>
      <section id="packages" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          {t("ourPackages")}
        </h2>
        <br />
        <h3 className="bp4-heading thinnerText" style={{ textAlign: "center" }}>
          {t("ourPackagesDescription")}
        </h3>
        <section className="sectionStyle">
          <div className="galleryContainer">
            <PackagesOptions />
          </div>
        </section>
      </section>
      <section id="plans" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          {t("ourPlansSectionHeading")}
        </h2>
        <hr className="shortHr" />
        <h3 className="bp4-heading thinnerText" style={{ textAlign: "center" }}>
          {t("ourPlansSectionDescription")}
        </h3>
        <div
          className="centerContainer"
          style={{ margin: "20px 0px 200px 0px" }}
        >
          <Button intent="success" large={true} onClick={routeToContact}>
            {t("navContactUs")}
          </Button>
        </div>
      </section>
    </>
  );
}
