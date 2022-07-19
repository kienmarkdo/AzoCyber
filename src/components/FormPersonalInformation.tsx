import { Button, FormGroup, Icon, InputGroup } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function FormPersonalInformation() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToBusinessInfo = () => {
    navigate("/AzoCyber/contact/business_information");
  };

  // formik form validation
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      position: "",
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
      position: Yup.string()
        .max(255, t("255charsOrLess"))
        .required(t("requiredLabel")),
    }),
    onSubmit: (values) => {},
  });

  const [submitState, setSubmittedState] = useState(false);

  const submitNext = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (
      !(
        formik.errors.fullName ||
        formik.errors.email ||
        formik.errors.phoneNumber ||
        formik.errors.position
      ) &&
      (formik.touched.fullName ||
        formik.touched.email ||
        formik.touched.phoneNumber ||
        formik.touched.position)
    ) {
      routeToBusinessInfo();
    }
  };

  return (
    <>
      <section className="formContainer">
        <div className="progressBar">
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
            <p>{t("personalInformation")}</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            <Icon
              icon="ban-circle"
              iconSize={100}
              className="iconStyle incomplete"
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
          label={t("fullname")}
          labelFor="fullName"
          labelInfo={
            formik.touched.fullName && formik.errors.fullName ? (
              <span className="formErrorMessage">{formik.errors.fullName}</span>
            ) : (
              t("requiredLabel")
            )
          }
        >
          <InputGroup
            id="fullName"
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("fullnamePlaceholder")}
          />
        </FormGroup>
        <FormGroup
          label={t("email")}
          labelFor="email"
          labelInfo={
            formik.touched.email && formik.errors.email ? (
              <span className="formErrorMessage">{formik.errors.email}</span>
            ) : (
              t("requiredLabel")
            )
          }
        >
          <InputGroup
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("emailHelper")}
          />
        </FormGroup>
        <FormGroup
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
        >
          <InputGroup
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("phonenumberPlaceholder")}
          />
        </FormGroup>
        <FormGroup
          label={t("position")}
          labelFor="position"
          labelInfo={
            formik.touched.position && formik.errors.position ? (
              <span className="formErrorMessage">{formik.errors.position}</span>
            ) : (
              t("requiredLabel")
            )
          }
        >
          <InputGroup
            id="position"
            name="position"
            type="text"
            value={formik.values.position}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t("positionPlaceholder")}
          />
        </FormGroup>
        <Button
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
          intent="success"
          large={true}
          type="submit"
          onClick={submitNext}
        >
          {t("next")}
        </Button>
      </form>
    </>
  );
}
