import {
  Button,
  ButtonGroup,
  ControlGroup,
  Drawer,
  FormGroup,
  HTMLSelect,
  Icon,
  TextArea,
  Classes,
  DrawerSize,
  Position,
  Dialog,
} from "@blueprintjs/core";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import PackagesOptions from "./PackagesOptions";

export default function FormSecurityInformation(this: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToBusinessInfo = () => {
    navigate("/AzoCyber/contact/business_information");
  };

  const routeToHome = () => {
    navigate("/AzoCyber/home/");
  };

  // options for Solutions Packages dropdown
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

  // useStates
  const [drawerState, setDrawerState] = useState(false);
  const [submittedState, setSubmittedState] = useState(false);
  const [formCompletedState, setFormCompletedState] = useState(false);

  // Actions for when a form is sucessfully submitted
  const submitForm = () => {
    setSubmittedState(true);
    setFormCompletedState(true);
  };

  // This useEffect prevents page scrolling when the drawer is open
  useEffect(() => {
    if (drawerState === true) {
      document.body.style.overflow = "hidden"; // turns off page scrolling
      document.body.scrollTop = 0; // Scroll to top of screen - For Safari
      document.documentElement.scrollTop = 0; // Scroll to top of screen - For Chrome, Firefox, IE and Opera
    } else {
      document.body.style.overflow = "scroll"; // turns on page scrolling again
    }
  }, [drawerState]);

  return (
    <>
      <section className="formContainer">
        <div className="progressBar">
          <div className="iconGroup">
            <Icon
              icon="tick-circle"
              iconSize={100}
              intent="success"
              className="iconStyle"
            />
            <p>{t("personalInformation")}</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            <Icon
              icon="tick-circle"
              iconSize={100}
              intent="success"
              className="iconStyle"
            />
            <p>{t("businessInformation")}</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            {formCompletedState === true ? (
              <Icon
                icon="tick-circle"
                iconSize={100}
                intent="success"
                className="iconStyle"
              />
            ) : (
              <Icon
                icon="ban-circle"
                iconSize={100}
                className="iconStyle"
                intent="primary"
              />
            )}

            <p>{t("securityInformation")}</p>
          </div>
        </div>
      </section>
      <section className="formInputContainer">
        <FormGroup
          className=""
          label={t("howMayWeHelp")}
          labelFor="help-details-input"
          labelInfo={t("requiredLabel")}
        >
          <TextArea
            id="help-details-input"
            fill={true}
            // growVertically={true}
            placeholder={t("enterDescription")}
            style={{ minHeight: "10vh", resize: "none" }}
          />
        </FormGroup>
        <ControlGroup style={{ display: "flex", gap: "20px" }}>
          <FormGroup
            className=""
            label={t("solutionsPackage")}
            labelFor="solutions-package-input"
            labelInfo={t("optionalLabel")}
            helperText={t("solutionsPackageOptionalHelper")}
          >
            <HTMLSelect
              id="solutions-package-input"
              fill={true}
              options={SOLUTIONS_PACKAGES}
            />
          </FormGroup>
          <Button
            style={{ margin: "auto 0px 35px 0px" }}
            intent="primary"
            // minimal={true}
            icon="help"
            onClick={() => setDrawerState(true)}
          >
            {t("learnMore")}
          </Button>
        </ControlGroup>
        <ButtonGroup
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
        >
          <Button intent="danger" large={true} onClick={routeToBusinessInfo}>
            {t("back")}
          </Button>
          <Button intent="success" large={true} onClick={submitForm}>
            {t("submit")}
          </Button>
        </ButtonGroup>

        {/* ==================================================== */}
        <Drawer
          isOpen={drawerState}
          onClose={() => {
            setDrawerState(false);
          }}
          icon="info-sign"
          title="Solutions Packages Information"
          size={DrawerSize.SMALL}
          // usePortal={true}
          position={Position.RIGHT}
          hasBackdrop={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          usePortal={false}
        >
          <div className={Classes.DRAWER_BODY}>
            <div className={Classes.DIALOG_BODY}>
              <PackagesOptions />
            </div>
          </div>
        </Drawer>
        {/* ==================================================== */}
        <Dialog
          title={t("submissionTitle")}
          icon="endorsed"
          isOpen={submittedState}
          usePortal={false}
          onClose={() => {
            setSubmittedState(false);
          }}
        >
          <div className={Classes.DIALOG_BODY}>
            <p>{t("contactConfirmation1")}</p>
            <p>{t("contactConfirmation2")}</p>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <Button intent="success" onClick={routeToHome}>
              {t("returnToHomePage")}
            </Button>
          </div>
        </Dialog>
        {/* ==================================================== */}
      </section>
    </>
  );
}
