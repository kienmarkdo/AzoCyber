import { Button, Card, Elevation, H4 } from "@blueprintjs/core";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const routeToSolutions = () => {
    navigate("/solutions");
  };

  return (
    <>
      <section
        className="topSectionStyle"
        style={{
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/1/43/u3Q8OK.jpg')",
        }}
      >
        <h1 className="bp4-heading" style={{ width: "50%" }}>
          One in five Canadian businesses experience a cyber attack annually
        </h1>
        <br />
        <h3 className="bp4-heading">Don't be another statistic</h3>
        <br />
        <Button large={true} intent="success" onClick={routeToSolutions}>
          Learn more
        </Button>
      </section>
      <section className="sectionStyle">
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Our Partners
        </h2>
        <br />
        <div className="galleryContainer">
          <img
            src="https://letsteachtheworld.org/wp-content/uploads/2016/07/myce-microsoft-Logo-2-300x85.png"
            alt="Look up HOW TO CREATE A RESPONSIVE IMG GALLERY WITH FLEXBOX"
            className="galleryImageItem"
          />
          <img
            src="https://www.international.gc.ca/world-monde/assets/images/funding-financement/canada-aid-aide/partners-partenaires-white-en.png"
            alt=""
            className="galleryImageItem"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2018/10/RBC-Logo.png"
            alt=""
            className="galleryImageItem"
          />
          <img
            src="https://www.vmcdn.ca/f/files/shared/corporate-logos/_logo_theottawahospital_1500x600.jpg"
            alt=""
            className="galleryImageItem"
          />
          <img
            src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2017/04/LogoBlack.jpg"
            alt=""
            className="galleryImageItem"
          />
          <img
            src="https://www.uottawa.ca/brand/sites/www.uottawa.ca.brand/files/uottawa_ver_white.png"
            alt=""
            className="galleryImageItem"
          />
        </div>
        <hr />
      </section>
      <section className="sectionStyle">
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Our Solutions
        </h2>
        <br />
        <div className="galleryContainer">
          <Card
            className="galleryItem"
            interactive={true}
            elevation={Elevation.TWO}
          >
            <h3>
              <a href="#">Prevention and Protection</a>
            </h3>
            <p>
              Strengthen your defences and never run into a cyber incident again
              with our Prevention and Protection package.
            </p>
            <br />
            <Button>Learn More</Button>
          </Card>
          <Card
            className="galleryItem"
            interactive={true}
            elevation={Elevation.TWO}
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
            elevation={Elevation.TWO}
          >
            <h3>
              <a href="#">Simulated Environments</a>
            </h3>
            <p>
              Discover vulnerabilities with this program, which includes
              extensive penetration tests and an IT simulation training package.
            </p>
            <br />
            <Button>Learn More</Button>
          </Card>
          <Card
            className="galleryItem"
            interactive={true}
            elevation={Elevation.TWO}
          >
            <h3>
              <a href="#">Consultation</a>
            </h3>
            <p>
              Learn protect your online presence and receive invaluable
              consultation from our cyber security professionals.
            </p>
            <br />
            <Button>Learn More</Button>
          </Card>
        </div>
      </section>
    </>
  );
}
