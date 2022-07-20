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
        <p className="packagesDescription">
          {t("preventionAndProtectionDescription")}
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
          {t("package_1_1")}
        </p>
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
          {t("package_1_2")}
        </p>
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
          {t("package_1_3")}
        </p>
        <p>
          <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
          {t("package_1_4")}
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
        <p className="packagesDescription">
          {t("emergencyResponseDescription")}
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
          {t("package_2_1")}
        </p>
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
          {t("package_2_2")}
        </p>
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
          {t("package_2_3")}
        </p>
        <p>
          <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
          {t("package_2_4")}
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
        <p className="packagesDescription">
          {t("simulatedEnvironmentsDescription")}
        </p>
        <br />
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
          {t("package_3_1")}
        </p>
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
          {t("package_3_2")}
        </p>
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
          {t("package_3_3")}
        </p>
        <p>
          <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
          {t("package_3_4")}
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
        <p className="packagesDescription">{t("consultationDescription")}</p>
        <br />
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
          {t("package_4_1")}
        </p>
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
          {t("package_4_2")}
        </p>
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
          {t("package_4_3")}
        </p>
        <p>
          <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
          {t("package_4_4")}
        </p>
        <br />
        <Button intent="primary" onClick={routeToQuote}>
          {t("navGetAQuote")}
        </Button>
      </Card>
    </>
  );
}
