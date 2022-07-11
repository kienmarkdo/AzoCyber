import { Button, NonIdealState } from "@blueprintjs/core";
import { useNavigate } from "react-router";

export default function PageNotFound() {
  const navigate = useNavigate();

  const routeToHome = () => {
    navigate("/AzoCyber/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <NonIdealState
        icon="error"
        title={"Error 404 - Page Not Found"}
        description={
          <div>
            The URL you entered is invalid.
            <br />
            Click the button below to go to our Home page.
          </div>
        }
        action={
          <Button
            text="Go Home"
            icon="home"
            intent="primary"
            onClick={routeToHome}
          />
        }
      />
    </div>
  );
}
