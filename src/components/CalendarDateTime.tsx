import React from "react";
import { DatePicker } from "@blueprintjs/datetime";

export const CalendarDateTime: React.FC = () => {
  return (
    <section>
      <h4 className="bp4-heading getQuoteMargins">Select Date & Time</h4>
      <DatePicker className="datepicker" timePrecision="minute" />
    </section>
  );
};
