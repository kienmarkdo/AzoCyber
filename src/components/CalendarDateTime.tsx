import React, { useState } from "react";
import { DatePicker } from "@blueprintjs/datetime";
import { useTranslation } from "react-i18next";
import { FormGroup, Tag, TextArea } from "@blueprintjs/core";

export const CalendarDateTime: React.FC = () => {
  const { t, i18n } = useTranslation();

  const today = new Date();
  today.setDate(today.getDate());
  const twoYearsLater = new Date();
  twoYearsLater.setDate(twoYearsLater.getDate() + 365 * 2);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const [selectedDateState, setSelectedDateState] = useState(today);

  return (
    <section className="getQuoteCalendar">
      <h2 className="bp4-heading headerMarginBottom">{t("selectDateTime")}</h2>
      <div className="getQuoteCalendarContent">
        <div className="getQuoteCalendarItem1">
          <p>{t("selectDateTimeDescription")}</p>
          <DatePicker
            locale={i18n.language.startsWith("en") ? "en" : "fr"}
            className="datepicker"
            timePrecision="minute"
            showActionsBar={true}
            defaultValue={today}
            highlightCurrentDay={true}
            canClearSelection={false}
            todayButtonText={t("today")}
            clearButtonText={t("clear")}
            // clearButtonText={""}
            minDate={yesterday}
            onChange={(newDate) => {
              setSelectedDateState(newDate);
            }}
            footerElement={
              <Tag
                style={{ textAlign: "center", margin: "15px auto" }}
                large={true}
                intent="primary"
              >
                {selectedDateState.getFullYear() +
                  "/" +
                  ("0" + selectedDateState.getMonth()).slice(-2) +
                  "/" +
                  ("0" + selectedDateState.getDate()).slice(-2) +
                  " at " +
                  ("0" + selectedDateState.getHours()).slice(-2) +
                  ":" +
                  ("0" + selectedDateState.getMinutes()).slice(-2)}
              </Tag>
            }
          />
        </div>
        {/* <div className="getQuoteCalendarItemSeparator" /> */}
        <div className="getQuoteCalendarItem2">
          <FormGroup
            className=""
            label={t("knowInAdvance")}
            labelFor="help-details-input"
            labelInfo={t("optionalLabel")}
            helperText={t("knowInAdvanceHelper")}
          >
            <TextArea
              id="help-details-input"
              fill={true}
              // growVertically={true}
              placeholder={t("enterDescription")}
              style={{ height: "200px", resize: "none" }}
            />
          </FormGroup>
        </div>
      </div>
    </section>
  );
};
