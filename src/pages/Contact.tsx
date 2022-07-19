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
      {/* 
      Data/state management to retain data from previous step of a multi-step form

      StackOverflow 1 (data/state management):
      - https://stackoverflow.com/questions/60767037/how-do-i-save-form-data-using-react-router-dom

      StackOverflow 2 (shared service):
      - https://stackoverflow.com/questions/63084617/how-to-keep-entered-form-data-of-page1-after-navigating-back-from-page2-in-angul

      Gal Schlezinger blog:
      - https://gal.hagever.com/posts/react-forms-and-history-state

      Other ways to word the question:
      - https://stackoverflow.com/questions/63481030/multi-step-form-in-react-not-retaining-values-after-clicking-continue-or-back
      - https://stackoverflow.com/questions/59896468/multi-step-form-how-to-show-data-from-steps-before
       */}
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
