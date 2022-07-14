import {
  Button,
  ButtonGroup,
  Classes,
  ControlGroup,
  Dialog,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from "@blueprintjs/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { CalendarDateTime } from "../components/CalendarDateTime";

export default function GetQuote(this: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToHome = () => {
    navigate("/AzoCyber/home");
  };

  const [submittedState, setSubmittedState] = useState(false);

  const submitForm = () => {
    setSubmittedState(true);
  };

  const ORGANIZATION_TYPES = [
    t("allOrganizationTypes"),
    t("smallBusinesses"),
    t("largeOrganizations"),
    t("government"),
    t("academia"),
  ];

  const ORGANIZATION_SIZES = [
    t("selectOrganizationSize"),
    "0 - 200",
    "201 - 500",
    "501 - 2000",
    "2000+",
  ];

  const SOLUTIONS_PACKAGES = [
    t("selectAPackage"),
    t("selectAPackage1"),
    t("selectAPackage2"),
    t("selectAPackage3"),
    t("selectAPackage4"),
    t("selectAPackage5"),
    t("selectAPackage6"),
    t("selectAPackage7"),
    t("selectAPackage8"),
  ];

  const [onsiteState, setOnsiteState] = useState("no");

  // This useEffect prevents page scrolling when the dialog is open
  useEffect(() => {
    if (submittedState === true) {
      document.body.style.overflow = "hidden"; // turns off page scrolling
      document.body.scrollTop = 0; // Scroll to top of screen - For Safari
      document.documentElement.scrollTop = 0; // Scroll to top of screen - For Chrome, Firefox, IE and Opera
    } else {
      document.body.style.overflow = "scroll"; // turns on page scrolling again
    }
  }, [submittedState]);

  return (
    <>
      <h1 className="bp4-heading" style={{ margin: "75px 20vw 0px 20vw" }}>
        {t("getAQuoteHeader")}
      </h1>

      <section className="formRequestQuoteContainer">
        <FormGroup
          className="formRequestItemSplitHalf"
          label={t("fullname")}
          labelFor="full-name-input"
          labelInfo={t("requiredLabel")}
          helperText={t("fullnameHelper")}
          // subLabel={t("fullnameHelper")}
        >
          <InputGroup
            id="full-name-input"
            placeholder={t("fullnamePlaceholder")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitHalf"
          label={t("email")}
          labelFor="work-email-input"
          labelInfo={t("requiredLabel")}
          helperText={t("emailHelper")}
        >
          <InputGroup
            id="work-email-input"
            placeholder={t("emailHelper")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          style={{ width: "100%" }}
          label={t("phonenumber")}
          labelFor="phone-number-input"
          labelInfo={t("requiredLabel")}
          helperText={t("phonenumberHelper")}
        >
          <InputGroup
            id="phone-number-input"
            placeholder={t("phonenumberPlaceholder")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label={t("organizationName")}
          labelFor="organization-name-input"
          labelInfo={t("requiredLabel")}
          helperText={t("organizationNameHelper")}
        >
          <InputGroup
            id="organization-name-input"
            placeholder={t("organizationNamePlaceholder")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label={t("organizationType")}
          labelFor="organization-type-input"
          labelInfo={t("requiredLabel")}
          helperText={t("organizationTypeHelper")}
        >
          <HTMLSelect
            id="organization-type-input"
            fill={true}
            options={ORGANIZATION_TYPES}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label={t("organizationSize")}
          labelFor="organization-size-input"
          labelInfo={t("requiredLabel")}
          helperText={t("organizationSizeHelper")}
        >
          <HTMLSelect
            id="organization-size-input"
            fill={true}
            options={ORGANIZATION_SIZES}
            large={true}
          />
        </FormGroup>
        <ControlGroup fill={true}>
          <FormGroup
            className=""
            label={t("solutionsPackage")}
            labelFor="solutions-package-input"
            labelInfo={t("requiredLabel")}
            helperText={t("solutionsPackageHelper")}
          >
            <HTMLSelect
              id="solutions-package-input"
              fill={true}
              options={SOLUTIONS_PACKAGES}
              large={true}
            />
          </FormGroup>
        </ControlGroup>

        <div className="getQuoteRadioButtonContainer">
          <label className="bp4-label">{t("sendTechnicationText")}</label>
          <label className="bp4-control bp4-radio bp4-align-left">
            <input
              name="group"
              type="radio"
              value={onsiteState}
              onChange={() => setOnsiteState("no")}
            />
            <span className="bp4-control-indicator"></span>
            {t("no")}
          </label>
          <label className="bp4-control bp4-radio bp4-align-left">
            <input
              name="group"
              type="radio"
              value={onsiteState}
              onChange={() => setOnsiteState("yes")}
            />
            <span className="bp4-control-indicator"></span>
            {t("yes")}
          </label>
        </div>
      </section>

      {onsiteState === "yes" ? <CalendarDateTime /> : <></>}

      <ButtonGroup
        style={{
          margin: "0px 20vw 10vh 20vw",
          display: "flex",
          gap: "10px",
        }}
      >
        <Button intent="success" large={true} onClick={submitForm}>
          {t("submitRequest")}
        </Button>
      </ButtonGroup>
      {/* ==================================================== */}
      <Dialog
        title="Submission Successful!"
        icon="endorsed"
        isOpen={submittedState}
        usePortal={false}
        onClose={() => {
          setSubmittedState(false);
        }}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>{t("getAQuoteDialog1")}</p>
          <p>{t("getAQuoteDialog2")}</p>
          <br />
          <p>{t("getAQuoteDialog3")}</p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <Button intent="success" onClick={routeToHome}>
            {t("returnToHomePage")}
          </Button>
        </div>
      </Dialog>
      {/* ==================================================== */}
    </>
  );
}
