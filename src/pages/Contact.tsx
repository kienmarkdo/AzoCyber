import FormPersonalInformation from "../components/FormPersonalInformation";
import FormBusinessInformation from "../components/FormBusinessInformation";
import FormSecurityInformation from "../components/FormSecurityInformation";
import { Route, Routes } from "react-router";

export default function Contact() {
  return (
    <>
      <h1 className="bp4-heading formHeader">Enter Contact Information</h1>
      <Routes>
        <Route path="/" element={<FormPersonalInformation />} />
        <Route
          path="/personal_information"
          element={<FormPersonalInformation />}
        />
        <Route
          path="/business_information"
          element={<FormBusinessInformation />}
        />
        {/* <Route path="*" element={<FormPersonalInformation />} /> */}
      </Routes>
    </>
  );
}
