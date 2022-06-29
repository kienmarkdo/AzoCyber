import { Button, FormGroup, Icon, InputGroup } from "@blueprintjs/core";
import { useNavigate } from "react-router";

export default function FormPersonalInformation() {
  const navigate = useNavigate();

  const routeToBusinessInfo = () => {
    navigate("/contact/business_information");
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
            <p>Personal Information</p>
          </div>

          <Icon icon="arrow-right" iconSize={50} style={{ color: "#8F99A8" }} />
          <div className="iconGroup">
            <Icon
              icon="ban-circle"
              iconSize={100}
              className="iconStyle incomplete"
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
          label="Full Name"
          labelFor="name-input"
          labelInfo="(required)"
        >
          <InputGroup id="name-input" placeholder="Enter Your Full Name" />
        </FormGroup>
        <FormGroup
          label="Email Address"
          labelFor="email-input"
          labelInfo="(required)"
        >
          <InputGroup id="email-input" placeholder="Enter Your Email Address" />
        </FormGroup>
        <FormGroup
          label="Phone Number"
          labelFor="phone-input"
          labelInfo="(required)"
        >
          <InputGroup id="phone-input" placeholder="Enter Your Phone Number" />
        </FormGroup>
        <FormGroup
          label="Position"
          labelFor="position-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="position-input"
            placeholder="Enter Your Position (e.g.: Security Analyst, Manager, etc.)"
          />
        </FormGroup>
        <Button
          style={{ display: "flex", gap: "10px", marginTop: "25px" }}
          intent="success"
          large={true}
          onClick={routeToBusinessInfo}
        >
          Next
        </Button>
      </section>
    </>
  );
}
