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
  Toaster,
} from "@blueprintjs/core";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import contactFormState from "../global/contactFormState";
import PackagesOptions from "./PackagesOptions";
import * as Yup from "yup";

const FormErrorToaster = Toaster.create({
  position: Position.TOP,
  maxToasts: 1,
  autoFocus: true,
  canEscapeKeyClear: true,
  usePortal: true,
});

export default function FormSecurityInformation(this: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToBusinessInfo = () => {
    navigate("/AzoCyber/contact/business_information");
  };

  const routeToHome = () => {
    navigate("/AzoCyber/home/");
  };

  //* options for Solutions Packages dropdown
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

  //* useStates
  const [drawerState, setDrawerState] = useState(false);
  const [submittedState, setSubmittedState] = useState(false);
  const [formCompletedState, setFormCompletedState] = useState(false);

  //* This useEffect prevents page scrolling/bottom overflow when the drawer is open
  // useEffect(() => {
  //   if (drawerState === true) {
  //     // document.body.style.overflow = "hidden"; // turns off page scrolling
  //     document.body.scrollTop = 0; // Scroll to top of screen - For Safari
  //     document.documentElement.scrollTop = 0; // Scroll to top of screen - For Chrome, Firefox, IE and Opera
  //   } else {
  //     document.body.style.overflow = "scroll"; // turns on page scrolling again
  //   }
  // }, [drawerState]);

  //* This useEffect prevents page scrolling/bottom overflow when the dialog is open
  useEffect(() => {
    if (submittedState === true) {
      // document.body.style.overflow = "hidden"; // turns off page scrolling
      document.body.scrollTop = 0; // Scroll to top of screen - For Safari
      document.documentElement.scrollTop = 0; // Scroll to top of screen - For Chrome, Firefox, IE and Opera
    } else {
      document.body.style.overflow = "scroll"; // turns on page scrolling again
    }
  }, [submittedState]);

  // formik form validation
  const formik = useFormik({
    initialValues: {
      howMayWeHelp: contactFormState.howMayWeHelp,
      solutionsPackage: contactFormState.solutionsPackage,
    },
    validationSchema: Yup.object({
      howMayWeHelp: Yup.string().required(t("requiredLabel")),
      solutionsPackage: Yup.string().optional(),
    }),
    onSubmit: (values) => {},
  });

  const submitBack = () => {
    contactFormState.howMayWeHelp = formik.values.howMayWeHelp;
    contactFormState.solutionsPackage = formik.values.solutionsPackage;

    routeToBusinessInfo();
  };

  const submitForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (
      !formik.errors.howMayWeHelp &&
      formik.touched.howMayWeHelp &&
      contactFormState.howMayWeHelp !== "" &&
      contactFormState.fullName !== "" &&
      contactFormState.email !== "" &&
      contactFormState.phoneNumber !== "" &&
      contactFormState.position !== "" &&
      contactFormState.organizationName !== "" &&
      contactFormState.organizationType !== "" &&
      contactFormState.organizationSize !== ""
    ) {
      // save form values to global variables in contactFormState
      contactFormState.howMayWeHelp = formik.values.howMayWeHelp;
      contactFormState.solutionsPackage = formik.values.solutionsPackage;

      // submit form actions
      setSubmittedState(true);
      setFormCompletedState(true);

      // reset form values
      contactFormState.fullName = "";
      contactFormState.email = "";
      contactFormState.phoneNumber = "";
      contactFormState.position = "";
      contactFormState.organizationName = "";
      contactFormState.organizationType = "";
      contactFormState.organizationSize = "";
      contactFormState.howMayWeHelp = "";
      contactFormState.solutionsPackage = "";
    } else {
      // alert("Form Submission Failed");
      handleToaster();
    }
  };

  //* toaster for form submission error
  function handleToaster() {
    // example on how to use <Toaster /> https://codesandbox.io/s/v90in?file=/src/App.js:79-146
    FormErrorToaster.show({
      message: t("contactFormSubmitError"),
      timeout: 5000,
      intent: "danger",
      icon: "warning-sign",
    });
  }

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
      <form className="formInputContainer" onSubmit={formik.handleSubmit}>
        <FormGroup
          className=""
          label={t("howMayWeHelp")}
          labelFor="howMayWeHelp"
          labelInfo={
            formik.touched.howMayWeHelp && formik.errors.howMayWeHelp ? (
              <span className="formErrorMessage">
                {formik.errors.howMayWeHelp}
              </span>
            ) : (
              t("requiredLabel")
            )
          }
        >
          <TextArea
            id="howMayWeHelp"
            name="howMayWeHelp"
            value={
              formik.values.howMayWeHelp === "" && !formik.touched.howMayWeHelp
                ? contactFormState.howMayWeHelp
                : formik.values.howMayWeHelp
            }
            onChange={(e) => {
              formik.touched.howMayWeHelp = true;
              formik.handleChange(e);
              formik.values.howMayWeHelp = e.target.value;
              contactFormState.howMayWeHelp = e.target.value;
            }}
            onBlur={formik.handleBlur}
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
            labelFor="solutionsPackage"
            labelInfo={t("optionalLabel")}
            helperText={t("solutionsPackageOptionalHelper")}
          >
            <HTMLSelect
              id="solutionsPackage"
              defaultValue={
                formik.values.solutionsPackage === "" &&
                !formik.touched.solutionsPackage
                  ? contactFormState.solutionsPackage
                  : formik.values.solutionsPackage
              }
              onChange={(e) => {
                formik.touched.solutionsPackage = true;
                formik.handleChange(e);
                formik.values.solutionsPackage = e.target.value;
                contactFormState.solutionsPackage = e.target.value;
              }}
              onBlur={formik.handleBlur}
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
          <Button
            intent="danger"
            large={true}
            type="submit"
            onClick={submitBack}
            disabled={formCompletedState}
          >
            {t("back")}
          </Button>
          <Button
            intent="success"
            large={true}
            type="submit"
            onClick={submitForm}
            disabled={formCompletedState}
          >
            {t("submit")}
          </Button>
        </ButtonGroup>

        {/* <Toaster
          ref={submitForm}
          position="top"
          maxToasts={1}
          autoFocus={true}
          canEscapeKeyClear={true}
          usePortal={true}
        >
          <Toast
            timeout={5000}
            onDismiss={(e) => {
              return e;
            }}
            intent="danger"
            message="The form has not been completed. Please go back and check that you have filled in everything."
            icon="warning-sign"
          />
        </Toaster> */}

        {/* ==================================================== */}
        <Drawer
          className="bp4-dark"
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
          usePortal={true}
        >
          <div className={Classes.DRAWER_BODY}>
            <div className={Classes.DIALOG_BODY}>
              <PackagesOptions />
            </div>
          </div>
        </Drawer>
        {/* ==================================================== */}
        <Dialog
          className="bp4-dark"
          title={t("submissionTitle")}
          icon="endorsed"
          isOpen={submittedState}
          usePortal={true}
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
      </form>
    </>
  );
}
