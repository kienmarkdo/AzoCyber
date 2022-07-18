import {
  Button,
  ButtonGroup,
  FormGroup,
  HTMLSelect,
  Icon,
  InputGroup,
} from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
// import { Select2 } from "@blueprintjs/select";
// import { useState } from "react";
import { useNavigate } from "react-router";

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
      <section className="formInputContainer">
        <FormGroup
          className=""
          label={t("organizationName")}
          labelFor="organization-name-input"
          labelInfo={t("requiredLabel")}
        >
          <InputGroup
            id="organization-name-input"
            placeholder={t("organizationNamePlaceholder")}
          />
        </FormGroup>
        <FormGroup
          className=""
          label={t("organizationType")}
          labelFor="organization-type-input"
          labelInfo={t("requiredLabel")}
        >
          <HTMLSelect
            id="organization-type-input"
            fill={true}
            options={ORGANIZATION_TYPES}
          />
        </FormGroup>
        <FormGroup
          className=""
          label={t("organizationSize")}
          labelFor="organization-size-input"
          labelInfo={t("requiredLabel")}
        >
          <HTMLSelect
            id="organization-size-input"
            fill={true}
            options={ORGANIZATION_SIZES}
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
          <Button intent="danger" large={true} onClick={routeToPersonalInfo}>
            {t("back")}
          </Button>
          <Button intent="success" large={true} onClick={routeToSecurityInfo}>
            {t("next")}
          </Button>
        </ButtonGroup>
      </section>
    </>
  );
}
