import {
  Menu,
  MenuItem,
  MenuDivider,
  Card,
  Button,
  Elevation,
  IconSize,
  Icon,
} from "@blueprintjs/core";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function Solutions() {
  const navigate = useNavigate();

  const routeToContact = () => {
    navigate("/AzoCyber/contact");
  };

  const routeToQuote = () => {
    navigate("/AzoCyber/get_a_quote");
  };

  return (
    <>
      <section className="topSectionContainer">
        <div className="topSectionItemOne">
          <h1 className="bp4-heading">Solutions</h1>
          <br />
          <h3
            className="bp4-heading bp4-blockquote thinnerText"
            style={{ /*width: "40%",*/ fontStyle: "oblique" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
          <br />
          <h4 className="bp4-heading thinnerText" /*style={{ width: "40%" }}*/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
        <div className="topSectionItemTwo">
          <Menu large={true}>
            <HashLink smooth to="/solutions/#packages">
              <MenuItem icon="selection" text="Our Packages" />
            </HashLink>
            <MenuDivider />
            <HashLink smooth to="/solutions/#plans">
              <MenuItem icon="selection" text="Discover Plans" />
            </HashLink>
          </Menu>
          <br />
          <br />
          <br />
          <Button large={true} intent="success" onClick={routeToQuote}>
            Get a Quote
          </Button>
        </div>
      </section>
      <section id="packages" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Our Packages
        </h2>
        <br />
        <h3 className="bp4-heading thinnerText" style={{ textAlign: "center" }}>
          Cybersecurity does not have to be complicated when we have your back.
        </h3>
        <section className="sectionStyle">
          <div className="galleryContainer">
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
              <Button intent="success" onClick={routeToQuote}>
                Get a Quote
              </Button>
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
                Ensure that threats are dealt with as they happen with the 24/7
                Emergency Response package.
              </p>
              <br />
              <p>
                <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
              </p>
              <p>
                <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
              </p>
              <p>
                <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
              </p>
              <p>
                <Icon icon="tick" intent="danger" size={IconSize.LARGE} /> Hello
              </p>
              <br />
              <Button intent="danger" onClick={routeToQuote}>
                Get a Quote
              </Button>
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
              <Button intent="warning" onClick={routeToQuote}>
                Get a Quote
              </Button>
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
              <Button intent="primary" onClick={routeToQuote}>
                Get a Quote
              </Button>
            </Card>
          </div>
        </section>
      </section>
      <section id="plans" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Find the Right Plan for You
        </h2>
        <hr className="shortHr" />
        <h3 className="bp4-heading thinnerText" style={{ textAlign: "center" }}>
          Not sure which plan is for you? Curious about our pricing? Contact us
          to get the answers to your questions.
        </h3>
        <div
          className="centerContainer"
          style={{ margin: "20px 0px 200px 0px" }}
        >
          <Button intent="success" large={true} onClick={routeToContact}>
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
