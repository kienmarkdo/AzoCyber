import {
  Button,
  ButtonGroup,
  FormGroup,
  HTMLSelect,
  Icon,
  InputGroup,
  TextArea,
} from "@blueprintjs/core";
import { useNavigate } from "react-router";

export default function FormSecurityInformation() {
  const navigate = useNavigate();

  const routeToBusinessInfo = () => {
    navigate("/contact/business_information");
  };

  const routeToHome = () => {
    navigate("/home/");
  };

  const SOLUTIONS_PACKAGES = [
    "No Package Selected",
    "Prevention & Protection",
    "Emergency Response",
    "Simulated Environments",
    "Consultation",
    "[NEW] IT Infrastructure Defence Report",
    "[NEW] Post-incident - Forensics Analysis",
    "[NEW] Post-incident - Repair & Recovery",
    "Other",
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
            <Icon
              icon="tick-circle"
              iconSize={100}
              intent="success"
              className="iconStyle"
            />
            <p>Business Information</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            <Icon
              icon="tick-circle"
              iconSize={100}
              intent="success"
              className="iconStyle"
            />
            <p>Security Information</p>
          </div>
        </div>
      </section>
      <section className="formInputContainer">
        <FormGroup
          className=""
          label="How may we help you?"
          labelFor="help-details-input"
          labelInfo="(required)"
        >
          <TextArea
            id="help-details-input"
            fill={true}
            // growVertically={true}
            placeholder="Enter Description"
            style={{ minHeight: "10vh", resize: "none" }}
          />
        </FormGroup>
        <FormGroup
          className=""
          label="Solutions package"
          labelFor="solutions-package-input"
          labelInfo="(optional)"
          helperText="Select an option if you are interested in one of our Solutions packages"
        >
          <HTMLSelect
            id="solutions-package-input"
            fill={true}
            options={SOLUTIONS_PACKAGES}
          />
        </FormGroup>

        <ButtonGroup
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
        >
          <Button intent="danger" large={true} onClick={routeToBusinessInfo}>
            Back
          </Button>
          <Button intent="success" large={true} onClick={routeToHome}>
            Submit
          </Button>
        </ButtonGroup>
      </section>
    </>
  );
}
