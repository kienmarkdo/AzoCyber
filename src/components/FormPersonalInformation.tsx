import { Button, FormGroup, Icon, InputGroup } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactFormState from "../global/contactFormState";

export default function FormPersonalInformation() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToBusinessInfo = () => {
    navigate("/AzoCyber/contact/business_information");
  };

  // formik form validation
  const formik = useFormik({
    initialValues: {
      fullName: contactFormState.fullName,
      email: contactFormState.email,
      phoneNumber: contactFormState.phoneNumber,
      position: contactFormState.position,
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

  const submitNext = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (
      (!(
        formik.errors.fullName ||
        formik.errors.email ||
        formik.errors.phoneNumber ||
        formik.errors.position
      ) &&
        formik.touched.fullName &&
        formik.touched.email &&
        formik.touched.phoneNumber &&
        formik.touched.position) ||
      (contactFormState.fullName !== "" &&
        contactFormState.email !== "" &&
        contactFormState.phoneNumber !== "" &&
        contactFormState.position !== "")
    ) {
      // save form values to global variables in contactFormState
      contactFormState.fullName = formik.values.fullName;
      contactFormState.email = formik.values.email;
      contactFormState.phoneNumber = formik.values.phoneNumber;
      contactFormState.position = formik.values.position;

      // next page
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
            value={
              formik.values.fullName === "" && !formik.touched.fullName
                ? contactFormState.fullName
                : formik.values.fullName
            }
            onChange={(e) => {
              formik.touched.fullName = true;
              formik.handleChange(e);
              formik.values.fullName = e.target.value;
              contactFormState.fullName = e.target.value;
            }}
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
            value={
              formik.values.email === "" && !formik.touched.email
                ? contactFormState.email
                : formik.values.email
            }
            onChange={(e) => {
              formik.touched.email = true;
              formik.handleChange(e);
              formik.values.email = e.target.value;
              contactFormState.email = e.target.value;
            }}
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
            value={
              formik.values.phoneNumber === "" && !formik.touched.phoneNumber
                ? contactFormState.phoneNumber
                : formik.values.phoneNumber
            }
            onChange={(e) => {
              formik.touched.phoneNumber = true;
              formik.handleChange(e);
              formik.values.phoneNumber = e.target.value;
              contactFormState.phoneNumber = e.target.value;
            }}
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
            value={
              formik.values.position === "" && !formik.touched.position
                ? contactFormState.position
                : formik.values.position
            }
            onChange={(e) => {
              formik.touched.position = true;
              formik.handleChange(e);
              formik.values.position = e.target.value;
              contactFormState.position = e.target.value;
            }}
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
