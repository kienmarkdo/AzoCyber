import {
  Button,
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
import { useFormik } from "formik";
import * as Yup from "yup";

// interface initialValues {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   organizationName: string;
//   organizationType: string;
//   organizationSize: string;
//   solutionsPackage: string;
//   isTechnician: boolean;
//   appointment: string;
//   organizationAddress: string;
//   appointmentDescription: string;
// }

export default function GetQuote() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToHome = () => {
    navigate("/AzoCyber/home");
  };

  const [submittedState, setSubmittedState] = useState(false);
  const [isDisplayedDialog, setIsDisplayedDialog] = useState(false);

  const submitForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (
      !(
        formik.errors.fullName ||
        formik.errors.email ||
        formik.errors.phoneNumber ||
        formik.errors.organizationName ||
        formik.errors.organizationSize ||
        formik.errors.organizationType ||
        formik.errors.organizationAddress ||
        formik.errors.solutionsPackage
      ) &&
      formik.touched.fullName &&
      formik.touched.email &&
      formik.touched.phoneNumber &&
      formik.touched.organizationName &&
      formik.touched.organizationSize &&
      formik.touched.organizationType &&
      formik.touched.organizationAddress &&
      formik.touched.solutionsPackage
    ) {
      setSubmittedState(true);
    }
  };

  const ORGANIZATION_TYPES = [
    "",
    t("smallBusinesses"),
    t("largeOrganizations"),
    t("government"),
    t("academia"),
  ];

  const ORGANIZATION_SIZES = [
    "",
    "0 - 200",
    "201 - 500",
    "501 - 2000",
    "2000+",
  ];

  const SOLUTIONS_PACKAGES = [
    "",
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

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      organizationName: "",
      organizationType: ORGANIZATION_TYPES[0],
      organizationSize: ORGANIZATION_SIZES[0],
      solutionsPackage: SOLUTIONS_PACKAGES[0],
      isTechnician: onsiteState,
      appointment: "",
      organizationAddress: "",
      appointmentDescription: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(255, t("255charsOrLess"))
        .required(t("requiredLabel")),
      email: Yup.string()
        .email("(invalid email address)")
        .required(t("requiredLabel")),
      phoneNumber: Yup.string()
        .max(38, t("38charsOrLess"))
        .required(t("requiredLabel")),
      organizationName: Yup.string()
        .max(100, t("100charsOrLess"))
        .required(t("requiredLabel")),
      organizationType: Yup.string().required(t("requiredLabel")),
      organizationSize: Yup.string().required(t("requiredLabel")),
      solutionsPackage: Yup.string().required(t("requiredLabel")),
      // isTechnician: Yup.string().required(t("requiredLabel")),
      // appointment: Yup.string().required(t("requiredLabel")),
      organizationAddress: Yup.string()
        .max(255, t("255charsOrLess"))
        .required(t("requiredLabel")),
      // appointmentDescription: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      // alert("hello");
      // console.log(values);
    },
  });

  // console.log(formik.values);
  // console.log(formik.errors);
  // console.log(formik.touched);

  return (
    <>
      <h1 className="bp4-heading" style={{ margin: "75px 20vw 0px 20vw" }}>
        {t("getAQuoteHeader")}
      </h1>

      <form
        className="formRequestQuoteContainer"
        onSubmit={formik.handleSubmit}
      >
        <FormGroup
          className="formRequestItemSplitHalf"
          label={t("fullname")}
          labelFor="fullName"
          labelInfo={
            formik.touched.fullName && formik.errors.fullName ? (
              <span className="formErrorMessage">{formik.errors.fullName}</span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("fullnameHelper")}
          // subLabel={t("fullnameHelper")}
        >
          <InputGroup
            id="fullName"
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("fullnamePlaceholder")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitHalf"
          label={t("email")}
          labelFor="work-email-input"
          labelInfo={
            formik.touched.email && formik.errors.email ? (
              <span className="formErrorMessage">{formik.errors.email}</span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("emailHelper")}
        >
          <InputGroup
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("emailHelper")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          style={{ width: "100%" }}
          label={t("phonenumber")}
          labelFor="phone-number-input"
          labelInfo={
            formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <span className="formErrorMessage">
                {formik.errors.phoneNumber}
              </span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("phonenumberHelper")}
        >
          <InputGroup
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("phonenumberPlaceholder")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label={t("organizationName")}
          labelFor="organization-name-input"
          labelInfo={
            formik.touched.organizationName &&
            formik.errors.organizationName ? (
              <span className="formErrorMessage">
                {formik.errors.organizationName}
              </span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("organizationNameHelper")}
        >
          <InputGroup
            id="organizationName"
            name="organizationName"
            type="text"
            value={formik.values.organizationName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("organizationNamePlaceholder")}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label={t("organizationType")}
          labelFor="organization-type-input"
          labelInfo={
            formik.touched.organizationType &&
            formik.errors.organizationType ? (
              <span className="formErrorMessage">
                {formik.errors.organizationType}
              </span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("organizationTypeHelper")}
        >
          <HTMLSelect
            id="organizationType"
            name="organizationType"
            value={formik.values.organizationType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fill={true}
            options={ORGANIZATION_TYPES}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label={t("organizationSize")}
          labelFor="organization-size-input"
          labelInfo={
            formik.touched.organizationSize &&
            formik.errors.organizationSize ? (
              <span className="formErrorMessage">
                {formik.errors.organizationSize}
              </span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("organizationSizeHelper")}
        >
          <HTMLSelect
            id="organizationSize"
            name="organizationSize"
            value={formik.values.organizationSize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fill={true}
            options={ORGANIZATION_SIZES}
            large={true}
          />
        </FormGroup>
        <FormGroup
          style={{ width: "100%" }}
          label={t("organizationAddress")}
          labelFor="organizationAddress"
          labelInfo={
            formik.touched.organizationAddress &&
            formik.errors.organizationAddress ? (
              <span className="formErrorMessage">
                {formik.errors.organizationAddress}
              </span>
            ) : (
              t("requiredLabel")
            )
          }
          helperText={t("organizationAddressHelper")}
        >
          <InputGroup
            id="organizationAddress"
            name="organizationAddress"
            type="text"
            value={formik.values.organizationAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("organizationAddressPlaceholder")}
            large={true}
          />
        </FormGroup>
        <ControlGroup fill={true}>
          <FormGroup
            className=""
            label={t("solutionsPackage")}
            labelFor="solutions-package-input"
            labelInfo={
              formik.touched.solutionsPackage &&
              formik.errors.solutionsPackage ? (
                <span className="formErrorMessage">
                  {formik.errors.solutionsPackage}
                </span>
              ) : (
                t("requiredLabel")
              )
            }
            helperText={t("solutionsPackageHelper")}
          >
            <HTMLSelect
              id="solutionsPackage"
              name="solutionsPackage"
              value={formik.values.solutionsPackage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fill={true}
              options={SOLUTIONS_PACKAGES}
              large={true}
            />
          </FormGroup>
        </ControlGroup>

        <div style={{ marginRight: "auto" }}>
          <label className="bp4-label">{t("sendTechnicationText")}</label>
          <label className="bp4-control bp4-radio bp4-align-left">
            <input
              id="noTechnician"
              name="isTechnician"
              type="radio"
              value={onsiteState}
              defaultChecked={true}
              onChange={() => {
                // TODO: Funky logic, but it works
                setOnsiteState("no");
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onsiteState === "yes"
                  ? (formik.values.isTechnician = "no")
                  : null;
              }}
            />
            <span className="bp4-control-indicator"></span>
            {t("no")}
          </label>
          <label className="bp4-control bp4-radio bp4-align-left">
            <input
              name="isTechnician"
              type="radio"
              value={onsiteState}
              onChange={() => {
                // TODO: Funky logic, but it works
                setOnsiteState("yes");
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onsiteState === "no"
                  ? (formik.values.isTechnician = "yes")
                  : null;
              }}
            />
            <span className="bp4-control-indicator"></span>
            {t("yes")}
          </label>
        </div>

        {onsiteState === "yes" ? (
          <>
            <CalendarDateTime />
          </>
        ) : (
          <></>
        )}
        <div style={{ marginTop: "35px" }}>
          <Button
            type="submit"
            intent="success"
            large={true}
            onClick={submitForm}
            disabled={isDisplayedDialog}
          >
            {t("submitRequest")}
          </Button>
        </div>
      </form>

      {/* ==================================================== */}
      <Dialog
        className="bp4-dark"
        title={t("submissionTitle")}
        icon="endorsed"
        isOpen={submittedState}
        usePortal={true}
        onClose={() => {
          setSubmittedState(false);
          setIsDisplayedDialog(true);
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
