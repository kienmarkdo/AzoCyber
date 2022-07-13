import { Card, Elevation, Icon, IconSize, Button } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function PackagesOptions() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToQuote = () => {
    navigate("/AzoCyber/get_a_quote");
  };
  return (
    <>
      <Card
        className="galleryItem"
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <h3
          className="bp4-heading headerMarginBottom"
          style={{ color: "#72CA9B" }}
        >
          Prevention & Protection
        </h3>
        <p>
          Strengthen your defences and never run into a cyber incident again
          with our Prevention & Protection package.
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} /> Hello
        </p>
        <br />
        <Button intent="success" onClick={routeToQuote}>
          {t("navGetAQuote")}
        </Button>
      </Card>
      <Card
        className="galleryItem"
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <h3
          className="bp4-heading headerMarginBottom"
          style={{ color: "#E76A6E" }}
        >
          Emergency Response
        </h3>
        <p>
          Ensure that threats are dealt with as they happen with the 24/7
          Emergency Response package.
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
        </p>
        <br />
        <Button intent="danger" onClick={routeToQuote}>
          {t("navGetAQuote")}
        </Button>
      </Card>
      <Card
        className="galleryItem"
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <h3
          className="bp4-heading headerMarginBottom"
          style={{ color: "#EC9A3C" }}
        >
          Simulated Environments
        </h3>
        <p>
          Discover vulnerabilities with this program, which includes extensive
          penetration tests and an IT simulation training package.
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} /> Hello
        </p>
        <br />
        <Button intent="warning" onClick={routeToQuote}>
          {t("navGetAQuote")}
        </Button>
      </Card>
      <Card
        className="galleryItem"
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <h3
          className="bp4-heading headerMarginBottom"
          style={{ color: "#8ABBFF" }}
        >
          Consultation
        </h3>
        <p>
          Learn protect your online presence and receive invaluable consultation
          from our cybersecurity professionals.
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} /> Hello
        </p>
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} /> Hello
        </p>
        <br />
        <Button intent="primary" onClick={routeToQuote}>
          {t("navGetAQuote")}
        </Button>
      </Card>
    </>
  );
}
