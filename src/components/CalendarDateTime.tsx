import React from "react";
import { DatePicker } from "@blueprintjs/datetime";
import { useTranslation } from "react-i18next";
import { FormGroup, InputGroup, TextArea } from "@blueprintjs/core";

export const CalendarDateTime: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="getQuoteCalendar">
      <h2 className="bp4-heading headerMarginBottom">{t("selectDateTime")}</h2>
      <div className="getQuoteCalendarContent">
        <div className="getQuoteCalendarItem1">
          <p>{t("selectDateTimeDescription")}</p>
          <DatePicker className="datepicker" timePrecision="minute" />
        </div>
        <div className="getQuoteCalendarItem2">
          <FormGroup
            style={{ marginBottom: "50px" }}
            label={t("organizationAddress")}
            labelFor="organization-name-input"
            labelInfo={t("requiredLabel")}
            helperText={t("organizationAddressHelper")}
          >
            <InputGroup
              id="organization-name-input"
              placeholder={t("organizationAddressPlaceholder")}
              large={true}
            />
          </FormGroup>
          <FormGroup
            className=""
            label={t("knowInAdvance")}
            labelFor="help-details-input"
            labelInfo={t("optionalLabel")}
          >
            <TextArea
              id="help-details-input"
              fill={true}
              // growVertically={true}
              placeholder={t("enterDescription")}
              style={{ height: "180px", resize: "none" }}
            />
          </FormGroup>
        </div>
      </div>
    </section>
  );
};
