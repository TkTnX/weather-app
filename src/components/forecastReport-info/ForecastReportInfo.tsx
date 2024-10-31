import { findIcon } from "../../libs/findIcon";
import { getDate } from "../../libs/getDate";
import { Iforecast } from "../forecastReport/ForecastReport";
import "./forecastReportInfo.css";

const ForecastReportInfo = ({ forecast }: { forecast: Iforecast }) => {
  return (
    <div className="forecastReportInfo">
      <h5>Next Forecast</h5>

      <div className="forecastReportInfo__data scrollbar">
        {forecast.forecastday.map((day) => (
          <div className="forecastReportInfo__data-item">
            <h6>{getDate(new Date(day.date))}</h6>{" "}
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

export default ForecastReportInfo;
