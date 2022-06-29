import FormBusinessInformation from "../components/FormBusinessInformation";
import FormPersonalInformation from "../components/FormPersonalInformation";
import FormSecurityInformation from "../components/FormSecurityInformation";

export default function Contact() {
  return (
    <>
      <h1
        className="bp4-heading"
        style={{ textAlign: "center", marginTop: "75px" }}
      >
        Enter Contact Information
      </h1>
      <FormPersonalInformation />
      <FormBusinessInformation />
      <FormSecurityInformation />
    </>
  );
}
