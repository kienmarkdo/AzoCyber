import { Button, Card, Elevation, MenuDivider } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const routeToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <section
        className="homeTopSection"
        style={{
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/1/43/u3Q8OK.jpg')",
        }}
      >
        <h1 className="bp4-heading" style={{ width: "50%" }}>
          One in five Canadian businesses experience a cyber attack annually
        </h1>
        <br />
        <h2 className="bp4-heading thinnerText">Don't be another statistic</h2>
        <br />
        <Button large={true} intent="success" onClick={routeToAbout}>
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
            src="https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png"
            // Look up HOW TO CREATE A RESPONSIVE IMAGE GALLERY WITH FLEXBOX
            alt="Microsoft logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://www.international.gc.ca/world-monde/assets/images/funding-financement/canada-aid-aide/partners-partenaires-white-en.png"
            alt="Government of Canada partnership logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2018/10/RBC-Logo.png"
            alt="RBC logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://media.discordapp.net/attachments/983190148206428190/990826007281958912/TOH_addmarg1.png?width=1440&height=363"
            // Blue background https://www.vmcdn.ca/f/files/shared/corporate-logos/_logo_theottawahospital_1500x600.jpg
            // Alternate https://secure.ohri.ca/OHRIEvents/images/ohri-logowhite-2020.png
            alt="The Ottawa Hospital logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://media.discordapp.net/attachments/983190148206428190/990824126010769418/Palantir_addmarg.png?width=1440&height=592"
            // Black background https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2017/04/LogoBlack.jpg
            // Large white https://d24wuq6o951i2g.cloudfront.net/img/events/id/458/458146959/assets/2834ec4648153222fc8f73e4cf6c672b.Palantir_Logo_Light.png
            // Large black https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Palantir_Technologies_logo.svg/2560px-Palantir_Technologies_logo.svg.png
            alt="Palantir logo"
            className="galleryImagePartnersItem"
          />
          <img
            src="https://www.uottawa.ca/brand/sites/www.uottawa.ca.brand/files/uottawa_ver_white.png"
            alt="uOttawa University of Ottawa logo"
            className="galleryImagePartnersItem"
          />
        </div>
        <MenuDivider />
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
            elevation={Elevation.FOUR}
          >
            <h3>
              {/* // TODO: Replace with React Router */}
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
              extensive penetration tests and an IT simulation training package.
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
