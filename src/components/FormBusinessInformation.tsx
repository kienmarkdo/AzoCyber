import {
  Button,
  ButtonGroup,
  FormGroup,
  HTMLSelect,
  Icon,
  InputGroup,
} from "@blueprintjs/core";
// import { Select2 } from "@blueprintjs/select";
// import { useState } from "react";
import { useNavigate } from "react-router";

export default function FormBusinessInformation() {
  const navigate = useNavigate();

  const routeToPersonalInfo = () => {
    navigate("/AzoCyber/contact/personal_information");
  };

  const routeToSecurityInfo = () => {
    navigate("/AzoCyber/contact/security_information");
  };

  const ORGANIZATION_TYPES = [
    "Select Organization Type",
    "Small Business",
    "Large Organization",
    "Government",
    "Academia",
  ];

  const ORGANIZATION_SIZES = [
    "Select Your Organization Size",
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
            <p>Personal Information</p>
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
            <p>Business Information</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            <Icon
              icon="ban-circle"
              iconSize={100}
              className="iconStyle incomplete"
            />
            <p>Security Information</p>
          </div>
        </div>
      </section>
      <section className="formInputContainer">
        <FormGroup
          className=""
          label="Organization Name"
          labelFor="organization-name-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="organization-name-input"
            placeholder="Enter Your Organization Name"
          />
        </FormGroup>
        <FormGroup
          className=""
          label="Organization Type"
          labelFor="organization-type-input"
          labelInfo="(required)"
        >
          <HTMLSelect
            id="organization-type-input"
            fill={true}
            options={ORGANIZATION_TYPES}
          />
        </FormGroup>
        <FormGroup
          className=""
          label="Organization Size"
          labelFor="organization-size-input"
          labelInfo="(required)"
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
            Back
          </Button>
          <Button intent="success" large={true} onClick={routeToSecurityInfo}>
            Next
          </Button>
        </ButtonGroup>
      </section>
    </>
  );
}
