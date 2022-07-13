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
          {t("preventionAndProtection")}
        </h3>
        <p>{t("preventionAndProtectionDescription")}</p>
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
          {t("emergencyResponse")}
        </h3>
        <p>{t("emergencyResponseDescription")}</p>
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
          {t("simulatedEnvironments")}
        </h3>
        <p>{t("simulatedEnvironmentsDescription")}</p>
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
          {t("consultation")}
        </h3>
        <p>{t("consultationDescription")}</p>
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
