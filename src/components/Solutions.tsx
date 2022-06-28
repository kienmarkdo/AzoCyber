import {
  Menu,
  MenuItem,
  MenuDivider,
  Card,
  Button,
  Elevation,
} from "@blueprintjs/core";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function Solutions() {
  const navigate = useNavigate();

  const routeToContact = () => {
    navigate("/contact");
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
          <Button large={true} intent="success" onClick={routeToContact}>
            Contact Us
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
        <h3 className="bp4-heading thinnerText" style={{ textAlign: "center" }}>
          Cybersecurity does not have to be complicated when we have your back.
        </h3>
        <section className="sectionStyle">
          <div className="galleryContainer">
            <Card
              className="galleryItem"
              interactive={true}
              elevation={Elevation.FOUR}
            >
              <h3>
                {/* // TODO: Replace with React Router */}
                <a href="#">Prevention and Protection</a>
              </h3>
              <p>
                Strengthen your defences and never run into a cyber incident
                again with our Prevention and Protection package.
              </p>
              <br />
              <Button>Learn More</Button>
            </Card>
            <Card
              className="galleryItem"
              interactive={true}
              elevation={Elevation.FOUR}
            >
              <h3>
                <a href="#">Emergency Response</a>
              </h3>
              <p>
                Ensure that threats are dealt with as they happen with the 24/7
                Emergency Response package.
              </p>
              <br />
              <Button>Learn More</Button>
            </Card>
            <Card
              className="galleryItem"
              interactive={true}
              elevation={Elevation.FOUR}
            >
              <h3>
                <a href="#">Simulated Environments</a>
              </h3>
              <p>
                Discover vulnerabilities with this program, which includes
                extensive penetration tests and an IT simulation training
                package.
              </p>
              <br />
              <Button>Learn More</Button>
            </Card>
            <Card
              className="galleryItem"
              interactive={true}
              elevation={Elevation.FOUR}
            >
              <h3>
                <a href="#">Consultation</a>
              </h3>
              <p>
                Learn protect your online presence and receive invaluable
                consultation from our cybersecurity professionals.
              </p>
              <br />
              <Button>Learn More</Button>
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
        <hr style={{ width: "200px", margin: "25px auto" }} />
        <h3 className="bp4-heading thinnerText" style={{ textAlign: "center" }}>
          Not sure what you need? Curious about our pricing? Contact us to get
          the answers to your questions.
        </h3>
        <div
          className="centerContainer"
          style={{ margin: "20px 0px 200px 0px" }}
        >
          <Button intent="success" large={true}>
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
