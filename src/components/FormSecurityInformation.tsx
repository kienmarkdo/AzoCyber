import {
  Button,
  ButtonGroup,
  Card,
  ControlGroup,
  Drawer,
  Elevation,
  FormGroup,
  HTMLSelect,
  Icon,
  IconSize,
  TextArea,
  Classes,
  DrawerSize,
  Position,
  Dialog,
} from "@blueprintjs/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function FormSecurityInformation(this: any) {
  const navigate = useNavigate();

  const routeToBusinessInfo = () => {
    navigate("/AzoCyber/contact/business_information");
  };

  const routeToHome = () => {
    navigate("/AzoCyber/home/");
  };

  // options for Solutions Packages dropdown
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

  // useStates
  const [drawerState, setDrawerState] = useState(false);
  const [submittedState, setSubmittedState] = useState(false);
  const [formCompletedState, setFormCompletedState] = useState(false);

  // Actions for when a form is sucessfully submitted
  const submitForm = () => {
    setSubmittedState(true);
    setFormCompletedState(true);
  };

  // This useEffect prevents page scrolling when the drawer is open
  useEffect(() => {
    if (drawerState === true) {
      document.body.style.overflow = "hidden"; // turns off page scrolling
      document.body.scrollTop = 0; // Scroll to top of screen - For Safari
      document.documentElement.scrollTop = 0; // Scroll to top of screen - For Chrome, Firefox, IE and Opera
    } else {
      document.body.style.overflow = "scroll"; // turns on page scrolling again
    }
  }, [drawerState]);

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
        <ControlGroup style={{ display: "flex", gap: "20px" }}>
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
          <Button
            style={{ margin: "auto 0px 35px 0px" }}
            onClick={() => setDrawerState(true)}
          >
            <Icon icon="help" style={{ margin: "0px 5px 0px 0px" }} /> Learn
            more
          </Button>
        </ControlGroup>
        <ButtonGroup
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
        >
          <Button intent="danger" large={true} onClick={routeToBusinessInfo}>
            Back
          </Button>
          <Button intent="success" large={true} onClick={submitForm}>
            Submit
          </Button>
        </ButtonGroup>

        {/* ==================================================== */}
        <Drawer
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
          usePortal={false}
        >
          <div className={Classes.DRAWER_BODY}>
            <div className={Classes.DIALOG_BODY}>
              <Card
                className="galleryItem"
                interactive={false}
                elevation={Elevation.FOUR}
              >
                <h3
                  className="bp4-heading headerMarginBottom"
                  style={{ color: "#72CA9B" }}
                >
                  Prevention & Protection
                </h3>
                <p>
                  Strengthen your defences and never run into a cyber incident
                  again with our Prevention & Protection package.
                </p>
                <br />
                <p>
                  <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="success" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <br />
              </Card>
              <Card
                className="galleryItem"
                interactive={false}
                elevation={Elevation.FOUR}
              >
                <h3
                  className="bp4-heading headerMarginBottom"
                  style={{ color: "#E76A6E" }}
                >
                  Emergency Response
                </h3>
                <p>
                  Ensure that threats are dealt with as they happen with the
                  24/7 Emergency Response package.
                </p>
                <br />
                <p>
                  <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="danger" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <br />
              </Card>
              <Card
                className="galleryItem"
                interactive={false}
                elevation={Elevation.FOUR}
              >
                <h3
                  className="bp4-heading headerMarginBottom"
                  style={{ color: "#EC9A3C" }}
                >
                  Simulated Environments
                </h3>
                <p>
                  Discover vulnerabilities with this program, which includes
                  extensive penetration tests and an IT simulation training
                  package.
                </p>
                <br />
                <p>
                  <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="warning" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <br />
              </Card>
              <Card
                className="galleryItem"
                interactive={false}
                elevation={Elevation.FOUR}
              >
                <h3
                  className="bp4-heading headerMarginBottom"
                  style={{ color: "#8ABBFF" }}
                >
                  Consultation
                </h3>
                <p>
                  Learn protect your online presence and receive invaluable
                  consultation from our cybersecurity professionals.
                </p>
                <br />
                <p>
                  <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <p>
                  <Icon icon="tick" intent="primary" size={IconSize.LARGE} />{" "}
                  Hello
                </p>
                <br />
              </Card>
            </div>
          </div>
        </Drawer>
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
            <p>Your Contact form has been sent to our team!</p>
            <p>You will receive a response in 3-5 business days.</p>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <Button intent="success" onClick={routeToHome}>
              Return To Home Page
            </Button>
          </div>
        </Dialog>
        {/* ==================================================== */}
      </section>
    </>
  );
}
