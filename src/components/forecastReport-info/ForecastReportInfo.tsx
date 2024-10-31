import { Iforecast } from "../forecastReport/ForecastReport";
import "./forecastReportInfo.css";

const ForecastReportInfo = ({ forecast }: { forecast: Iforecast }) => {
  console.log(forecast.forecastday[0].day);
  return (
    <div className="forecastReportInfo">
      <h5>Next Forecast</h5>

      <div className="forecastReportInfo__data scrollbar">
        {forecast.forecastday.map((day) => (
          <div className="forecastReportInfo__data-item">
            <h6>Sep, 13</h6> <img src="/weathers/sun.png" alt="Sunny" />{" "}
            <p>21°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastReportInfo;
