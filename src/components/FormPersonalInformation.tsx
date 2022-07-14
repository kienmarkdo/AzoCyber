import { Button, FormGroup, Icon, InputGroup } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function FormPersonalInformation() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const routeToBusinessInfo = () => {
    navigate("/AzoCyber/contact/business_information");
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
      <section className="formInputContainer">
        <FormGroup
          className=""
          label={t("fullname")}
          labelFor="name-input"
          labelInfo={t("requiredLabel")}
        >
          <InputGroup id="name-input" placeholder={t("fullnamePlaceholder")} />
        </FormGroup>
        <FormGroup
          label={t("email")}
          labelFor="email-input"
          labelInfo={t("requiredLabel")}
        >
          <InputGroup id="email-input" placeholder={t("emailPlaceholder")} />
        </FormGroup>
        <FormGroup
          label={t("phonenumber")}
          labelFor="phone-input"
          labelInfo={t("requiredLabel")}
        >
          <InputGroup
            id="phone-input"
            placeholder={t("phonenumberPlaceholder")}
          />
        </FormGroup>
        <FormGroup
          label={t("position")}
          labelFor="position-input"
          labelInfo={t("requiredLabel")}
        >
          <InputGroup
            id="position-input"
            placeholder={t("positionPlaceholder")}
          />
        </FormGroup>
        <Button
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
          intent="success"
          large={true}
          onClick={routeToBusinessInfo}
        >
          {t("next")}
        </Button>
      </section>
    </>
  );
}
