import {
  Button,
  ButtonGroup,
  Classes,
  ControlGroup,
  Dialog,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from "@blueprintjs/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { CalendarDateTime } from "../components/CalendarDateTime";

export default function GetQuote(this: any) {
  const navigate = useNavigate();

  const routeToHome = () => {
    navigate("/AzoCyber/home");
  };

  const [submittedState, setSubmittedState] = useState(false);

  const submitForm = () => {
    setSubmittedState(true);
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

  const SOLUTIONS_PACKAGES = [
    "Select a Package",
    "Prevention & Protection",
    "Emergency Response",
    "Simulated Environments",
    "Consultation",
    "[NEW] IT Infrastructure Defence Report",
    "[NEW] Post-incident - Forensics Analysis",
    "[NEW] Post-incident - Repair & Recovery",
    "Other",
  ];

  const [onsiteState, setOnsiteState] = useState("no");

  return (
    <>
      <h1 className="bp4-heading" style={{ margin: "75px 20vw 0px 20vw" }}>
        Request A Quote
      </h1>

      <section className="formRequestQuoteContainer">
        <FormGroup
          className="formRequestItemSplitHalf"
          label="Full Name"
          labelFor="full-name-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="full-name-input"
            placeholder="Enter Your First and Last Name (e.g.: Jane Doe)"
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitHalf"
          label="Work Email"
          labelFor="work-email-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="work-email-input"
            placeholder="Enter Your Work Email (e.g.: example@gmail.com)"
            large={true}
          />
        </FormGroup>
        <FormGroup
          style={{ width: "100%" }}
          label="Phone Number"
          labelFor="phone-number-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="phone-number-input"
            placeholder="Enter Your Phone Number (e.g.: 555-555-5555)"
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label="Organization Name"
          labelFor="organization-name-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="organization-name-input"
            placeholder="Enter Your Organization Name"
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label="Organization Type"
          labelFor="organization-type-input"
          labelInfo="(required)"
        >
          <HTMLSelect
            id="organization-type-input"
            fill={true}
            options={ORGANIZATION_TYPES}
            large={true}
          />
        </FormGroup>
        <FormGroup
          className="formRequestItemSplitThird"
          label="Organization Size"
          labelFor="organization-size-input"
          labelInfo="(required)"
        >
          <HTMLSelect
            id="organization-size-input"
            fill={true}
            options={ORGANIZATION_SIZES}
            large={true}
          />
        </FormGroup>
        <ControlGroup fill={true}>
          <FormGroup
            className=""
            label="Solutions package"
            labelFor="solutions-package-input"
            labelInfo="(required)"
            helperText="Select a package for which you would like to receive a quote"
          >
            <HTMLSelect
              id="solutions-package-input"
              fill={true}
              options={SOLUTIONS_PACKAGES}
              large={true}
            />
          </FormGroup>
        </ControlGroup>

        <div className="getQuoteRadioButtonContainer">
          <label className="bp4-label">
            Would you like a AzoCyber to send a technician to your on-site
            location?
          </label>
          <label className="bp4-control bp4-radio bp4-align-left">
            <input
              name="group"
              type="radio"
              value={onsiteState}
              onChange={() => setOnsiteState("no")}
            />
            <span className="bp4-control-indicator"></span>No
          </label>
          <label className="bp4-control bp4-radio bp4-align-left">
            <input
              name="group"
              type="radio"
              value={onsiteState}
              onChange={() => setOnsiteState("yes")}
            />
            <span className="bp4-control-indicator"></span>Yes
          </label>
        </div>
      </section>

      {onsiteState === "yes" ? <CalendarDateTime /> : <></>}

      <ButtonGroup
        style={{
          margin: "0px 20vw 10vh 20vw",
          display: "flex",
          gap: "10px",
        }}
      >
        <Button intent="success" large={true} onClick={submitForm}>
          Submit Request
        </Button>
      </ButtonGroup>
      {/* ==================================================== */}
      <Dialog
        title="Submission Successful!"
        icon="endorsed"
        isOpen={submittedState}
        usePortal={false}
        onClose={() => {
          setSubmittedState(false);
        }}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>Your Request A Quote form has been sent to our team!</p>
          <p>We will contact you in 3-5 business days.</p>
          <br />
          <p>
            NOTE: We may need to send an AzoCyber technician on-site depending
            on your type of request.
          </p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <Button intent="success" onClick={routeToHome}>
            Return To Home Page
          </Button>
        </div>
      </Dialog>
      {/* ==================================================== */}
    </>
  );
}
