import {
  Button,
  ButtonGroup,
  FormGroup,
  HTMLSelect,
  Icon,
  InputGroup,
} from "@blueprintjs/core";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
// import { Select2 } from "@blueprintjs/select";
// import { useState } from "react";
import { useNavigate } from "react-router";
import contactFormState from "../global/contactFormState";
import * as Yup from "yup";

export default function FormBusinessInformation() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToPersonalInfo = () => {
    navigate("/AzoCyber/contact/personal_information");
  };

  const routeToSecurityInfo = () => {
    navigate("/AzoCyber/contact/security_information");
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

  // formik form validation
  const formik = useFormik({
    initialValues: {
      organizationName: contactFormState.organizationName,
      organizationType: contactFormState.organizationType,
      organizationSize: contactFormState.organizationSize,
    },
    validationSchema: Yup.object({
      organizationName: Yup.string()
        .max(255, t("255charsOrLess"))
        .required(t("requiredLabel")),
      organizationType: Yup.string().required(t("requiredLabel")),
      organizationSize: Yup.string().required(t("requiredLabel")),
    }),
    onSubmit: (values) => {},
  });

  const submitBack = () => {
    contactFormState.organizationName = formik.values.organizationName;
    contactFormState.organizationType = formik.values.organizationType;
    contactFormState.organizationSize = formik.values.organizationSize;

    routeToPersonalInfo();
  };

  const submitNext = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (
      (!(
        formik.errors.organizationName ||
        formik.errors.organizationType ||
        formik.errors.organizationSize
      ) &&
        formik.touched.organizationName &&
        formik.touched.organizationType &&
        formik.touched.organizationSize) ||
      (contactFormState.organizationName !== "" &&
        contactFormState.organizationType !== "" &&
        contactFormState.organizationSize !== "")
    ) {
      // save form values to global variables in contactFormState
      contactFormState.organizationName = formik.values.organizationName;
      contactFormState.organizationType = formik.values.organizationType;
      contactFormState.organizationSize = formik.values.organizationSize;

      // next page
      routeToSecurityInfo();
    }
  };

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
            {/* <Icon
              icon="tick-circle"
              iconSize={100}
              intent="success"
              className="iconStyle"
            /> */}
            <Icon
              icon="ban-circle"
              iconSize={100}
              className="iconStyle"
              intent="primary"
            />
            <p>{t("businessInformation")}</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            <Icon
              icon="ban-circle"
              iconSize={100}
              className="iconStyle incomplete"
            />
            <p>{t("securityInformation")}</p>
          </div>
        </div>
      </section>
      <form className="formInputContainer" onSubmit={formik.handleSubmit}>
        <FormGroup
          className=""
          label={t("organizationName")}
          labelFor="organizationName"
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
        >
          <InputGroup
            id="organizationName"
            name="organizationName"
            type="text"
            value={
              formik.values.organizationName === "" &&
              !formik.touched.organizationName
                ? contactFormState.organizationName
                : formik.values.organizationName
            }
            onChange={(e) => {
              formik.touched.organizationName = true;
              formik.handleChange(e);
              formik.values.organizationName = e.target.value;
              contactFormState.organizationName = e.target.value;
            }}
            onBlur={formik.handleBlur}
            placeholder={t("organizationNamePlaceholder")}
          />
        </FormGroup>
        <FormGroup
          className=""
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
        >
          <HTMLSelect
            id="organizationType"
            fill={true}
            options={ORGANIZATION_TYPES}
            defaultValue={
              formik.values.organizationType === "" &&
              !formik.touched.organizationType
                ? contactFormState.organizationType
                : formik.values.organizationType
            }
            onChange={(e) => {
              formik.touched.organizationType = true;
              formik.handleChange(e);
              formik.values.organizationType = e.target.value;
              contactFormState.organizationType = e.target.value;
            }}
            onBlur={formik.handleBlur}
          />
        </FormGroup>
        <FormGroup
          className=""
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
        >
          <HTMLSelect
            id="organizationSize"
            fill={true}
            options={ORGANIZATION_SIZES}
            defaultValue={
              formik.values.organizationSize === "" &&
              !formik.touched.organizationSize
                ? contactFormState.organizationSize
                : formik.values.organizationSize
            }
            // value={formik.values.organizationSize}
            onChange={(e) => {
              formik.touched.organizationSize = true;
              formik.handleChange(e);
              formik.values.organizationSize = e.target.value;
              contactFormState.organizationSize = e.target.value;
            }}
            onBlur={formik.handleBlur}
          />
        </FormGroup>
        {/* <Select2
          items={ORGANIZATION_TYPES}
          onItemSelect={setOrganizationType}
          itemRenderer={() => {
            return <MenuItem text={ORGANIZATION_TYPES.map((org) => org)} />;
          }}
        >
          <Button text={organizationType} rightIcon="caret-down" />
        </Select2> */}
        <ButtonGroup
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
        >
          <Button intent="danger" large={true} onClick={submitBack}>
            {t("back")}
          </Button>
          <Button
            intent="success"
            large={true}
            type="submit"
            onClick={submitNext}
          >
            {t("next")}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
}
