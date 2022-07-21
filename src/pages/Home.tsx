import { Button, Card, Elevation, MenuDivider } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
// import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToAbout = () => {
    navigate("/AzoCyber/about");
  };

  const solutionsPath = "/AzoCyber/solutions/#packages";
  const routeToSolutions = () => {
    navigate(solutionsPath);
  };

  return (
    <>
      {/* <ChatWindow /> */}
      <section
        className="homeTopSection"
        style={{
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/1/43/u3Q8OK.jpg')",
        }}
      >
        <h1 className="bp4-heading headerMarginBottom" style={{ width: "50%" }}>
          {t("homeHeader")}
        </h1>
        <h2 className="bp4-heading headerMarginBottom thinnerText">
          {t("homeHeaderDescription")}
        </h2>
        <Button large={true} intent="success" onClick={routeToAbout}>
          {t("learnMore")}
        </Button>
      </section>
      <section className="sectionStyle" style={{ textAlign: "center" }}>
        <h2 className="bp4-heading">{t("ourPartners")}</h2>
        <hr className="shortHr" />{" "}
        <h3 className="bp4-heading thinnerText">
          {t("ourPartnersDescription")}
        </h3>
        <div className="galleryContainer">
          <img
            src="https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png"
            // Look up HOW TO CREATE A RESPONSIVE IMAGE GALLERY WITH FLEXBOX
            alt="Microsoft logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://www.international.gc.ca/world-monde/assets/images/funding-financement/canada-aid-aide/partners-partenaires-white-en.png"
            alt="Government of Canada partnership logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2018/10/RBC-Logo.png"
            alt="RBC logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://media.discordapp.net/attachments/983190148206428190/990826007281958912/TOH_addmarg1.png?width=1440&height=363"
            // Blue background https://www.vmcdn.ca/f/files/shared/corporate-logos/_logo_theottawahospital_1500x600.jpg
            // Alternate https://secure.ohri.ca/OHRIEvents/images/ohri-logowhite-2020.png
            alt="The Ottawa Hospital logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://www.nicepng.com/png/full/358-3589718_shopify-logo-white-transparent.png"
            alt="Shopify logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png"
            alt="Reddit logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://media.discordapp.net/attachments/983190148206428190/990824126010769418/Palantir_addmarg.png?width=1440&height=592"
            // Black background https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2017/04/LogoBlack.jpg
            // Large white https://d24wuq6o951i2g.cloudfront.net/img/events/id/458/458146959/assets/2834ec4648153222fc8f73e4cf6c672b.Palantir_Logo_Light.png
            // Large black https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Palantir_Technologies_logo.svg/2560px-Palantir_Technologies_logo.svg.png
            alt="Palantir logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://www.uottawa.ca/brand/sites/www.uottawa.ca.brand/files/uottawa_ver_white.png"
            alt="uOttawa University of Ottawa logo"
            className="galleryImagePartnersItem"
          />
        </div>
        <MenuDivider />
      </section>
      <section className="sectionStyle">
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          {t("ourSolutions")}
        </h2>
        <hr className="shortHr" />
        <div className="galleryContainer">
          <Card
            className="galleryItem"
            interactive={false}
            elevation={Elevation.FOUR}
          >
            <h3>
              <Link to={solutionsPath}>{t("preventionAndProtection")}</Link>
            </h3>
            <p className="packagesDescription">
              {t("preventionAndProtectionDescription")}
            </p>
            <br />
            <Button onClick={routeToSolutions}>{t("learnMore")}</Button>
          </Card>
          <Card
            className="galleryItem"
            interactive={false}
            elevation={Elevation.FOUR}
          >
            <h3>
              <Link to={solutionsPath}>{t("emergencyResponse")}</Link>
            </h3>
            <p className="packagesDescription">
              {t("emergencyResponseDescription")}
            </p>
            <br />
            <Button onClick={routeToSolutions}>{t("learnMore")}</Button>
          </Card>
          <Card
            className="galleryItem"
            interactive={false}
            elevation={Elevation.FOUR}
          >
            <h3>
              <Link to={solutionsPath}>{t("simulatedEnvironments")}</Link>
            </h3>
            <p className="packagesDescription">
              {t("simulatedEnvironmentsDescription")}
            </p>
            <br />
            <Button onClick={routeToSolutions}>{t("learnMore")}</Button>
          </Card>
          <Card
            className="galleryItem"
            interactive={false}
            elevation={Elevation.FOUR}
          >
            <h3>
              <Link to={solutionsPath}>{t("consultation")}</Link>
            </h3>
            <p className="packagesDescription">
              {t("consultationDescription")}
            </p>
            <br />
            <Button onClick={routeToSolutions}>{t("learnMore")}</Button>
          </Card>
        </div>
      </section>
    </>
  );
}
