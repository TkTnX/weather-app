import "./forecastReportWeek.css";
import { findIcon } from "../../libs/findIcon";
import { getDate } from "../../libs/getDate";
import { Iforecast } from "../forecastReport/ForecastReport";
const ForecastReportWeek = ({ forecast }: { forecast: Iforecast }) => {
  return (
    <div className="forecastReportWeek">
      <h5>Next Forecast</h5>

      <div className="forecastReportInfo__data scrollbar">
        {forecast.forecastday.map((day) => (
          <div className="forecastReportInfo__data-item">
            <h6>{getDate(new Date(day.date), "short")}</h6>{" "}
            <div className="forecastReportInfo__data-item-img">
              <img
                src={findIcon(day.day.condition.text)}
                alt={day.day.condition.text.trim()}
              />
            </div>{" "}
            <p>{day.day.avgtemp_c}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastReportWeek;
