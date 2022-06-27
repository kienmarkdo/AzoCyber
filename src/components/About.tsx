import { Menu, MenuItem, MenuDivider, Card, Button } from "@blueprintjs/core";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function About() {
  const navigate = useNavigate();

  const routeToSolutions = () => {
    navigate("/solutions");
  };

  return (
    <>
      <section className="topSectionContainer">
        <div className="topSectionItemOne">
          <h1 className="bp4-heading">About</h1>
          <br />
          <h3
            className="bp4-heading bp4-blockquote thinnerText"
            style={{ /*width: "40%",*/ fontStyle: "oblique" }}
          >
            Creation is difficult, but destruction is easy.
          </h3>
          <br />
          <h4 className="bp4-heading thinnerText" /*style={{ width: "40%" }}*/>
            More and more criminals are going virtual since physical attacks are
            becoming harder than cyber attacks due to insecure IT
            infrastructures. At CyberAzo, we aim to secure and provide threat
            protection to every Canadian business, one at a time.
          </h4>
        </div>
        <div className="topSectionItemTwo">
          <Menu large={true}>
            <HashLink smooth to="/about/#vision">
              <MenuItem icon="selection" text="Vision" />
            </HashLink>
            <MenuDivider />
            <HashLink smooth to="/about/#team">
              <MenuItem icon="selection" text="Team" />
            </HashLink>
          </Menu>
          <br />
          <br />
          <br />
          <Button large={true} intent="success" onClick={routeToSolutions}>
            Secure Your Business
          </Button>
        </div>
      </section>
      <section id="vision" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Vision
        </h2>
        <br />
        <section className="splitScreenContainer">
          <div className="splitScreenItemOne">
            <h3 className="bp4-heading">Our core values and beliefs</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="splitScreenItemTwo">
            <img
              src="https://media.discordapp.net/attachments/983190148206428190/990470017814523935/Azocyber_grad2.png"
              alt="AzoCyber logo no text"
              height="300"
            />
          </div>
        </section>
      </section>
      <section id="team" className="sectionStyle">
        <MenuDivider />
        <br />
        <br />
        <h2 className="bp4-heading" style={{ textAlign: "center" }}>
          Our Team
        </h2>
        <br />
        <div className="galleryContainer">
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Sergio Ramos</h3>
            <h3 className="bp4-heading thinnerText">
              Prevention and Protection Lead
            </h3>
            <br />
            <img
              src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"
              // Look up HOW TO CREATE A RESPONSIVE IMAGE GALLERY WITH FLEXBOX
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Sarah Leclerc</h3>
            <h3 className="bp4-heading thinnerText">
              Emergency Response Specialist
            </h3>
            <br />
            <img
              src="https://media.istockphoto.com/photos/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses-picture-id1144287292?k=20&m=1144287292&s=612x612&w=0&h=gaoqkiL6LFzghQfAQ9q8SbLUqtMIpzJNaKCegS3Wjmw="
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Geneviève Legault</h3>
            <h3 className="bp4-heading thinnerText">
              Cybersecurity Consultant
            </h3>
            <br />
            <img
              src="https://www.epicscotland.com/wp-content/uploads/2019/09/Business-Headshot-Women-004.jpg"
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Jide Olatunji</h3>
            <h3 className="bp4-heading thinnerText">Penetration Tester</h3>
            <br />
            <img
              src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-biracial-man-posing-picture-id1292475584?b=1&k=20&m=1292475584&s=170667a&w=0&h=jZ6etD3dfOV_NIgwR9hIQ5B9TBC5kpYxShIsaqjWbzc="
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Alexandre DuBois</h3>
            <h3 className="bp4-heading thinnerText">Senior Network Analyst</h3>
            <br />
            <img
              src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Tyron Woodley</h3>
            <h3 className="bp4-heading thinnerText">
              Vulnerability Researcher (VR)
            </h3>
            <br />
            <img
              src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Elizabeth Vandervoort</h3>
            <h3 className="bp4-heading thinnerText">
              Software Reverse Engineer (SRE)
            </h3>
            <br />
            <img
              src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Ruby McAlpine</h3>
            <h3 className="bp4-heading thinnerText">Data Security Engineer</h3>
            <br />
            <img
              src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Nathan McGregor</h3>
            <h3 className="bp4-heading thinnerText">
              Entreprise Security Architect
            </h3>
            <br />
            <img
              src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="galleryImageTeamItem">
            <h3 className="bp4-heading">Tuan Nguyen</h3>
            <h3 className="bp4-heading thinnerText">
              Digital Forensics Examiner
            </h3>
            <br />
            <img
              src="https://t4.ftcdn.net/jpg/03/07/36/97/360_F_307369771_Mm1wbpgaNeaW36hLqivp86gnsx20LSWY.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
