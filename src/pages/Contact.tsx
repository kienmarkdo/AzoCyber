import FormPersonalInformation from "../components/FormPersonalInformation";
import FormBusinessInformation from "../components/FormBusinessInformation";
import FormSecurityInformation from "../components/FormSecurityInformation";
import { Route, Routes } from "react-router";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="bp4-heading formHeader">{t("enterContactInformation")}</h1>
      {/* React Router 6 Tutorial #4 - Nested Routes https://www.youtube.com/watch?v=_gSmfgX89-8 */}
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
        <Route
          path="/security_information"
          element={<FormSecurityInformation />}
        />
      </Routes>
    </>
  );
}
