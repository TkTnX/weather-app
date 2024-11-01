import { useState } from "react";
import "./forecastReport.css";
import ForecastReportInfo from "../forecastReport-info/ForecastReportInfo";

type dayType = {
  condition: {
    icon: string;
    text: string;
  };
  temp_c: number;
  time: string;
};

type forecastDayType = {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    avgtemp_c: number;
  };
  hour: dayType[];
};

export interface Iforecast {
  forecastday: forecastDayType[];
}

const ForecastReport = ({ forecast }: { forecast: Iforecast }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="forecastReport">
      <button className="forecastReport__btn" onClick={() => setOpen(true)}>
        Forecast report <img src="/arrow-up.svg" alt="arrow" />
      </button>

      <div
        className={
          open
            ? "forecastReport__content forecastReport__content--open"
            : "forecastReport__content"
        }
      >
        <button
          onClick={() => setOpen(false)}
          className="forecastReport__close"
        >
          <img src="/arrow-left-white.svg" alt="back" />
          Back
        </button>
        <ForecastReportInfo forecast={forecast} />

        <div className="forecastReport__source">
          <img src="/sunIcon.svg" alt="sun" />
          <span>AccuWeather</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastReport;
