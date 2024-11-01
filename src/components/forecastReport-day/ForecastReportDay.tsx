import "./forecastReportDay.css";
import { getDate } from "../../libs/getDate";
import { Iforecast } from "../forecastReport/ForecastReport";
import { findIcon } from "../../libs/findIcon";
const ForecastReportDay = ({ forecast }: { forecast: Iforecast }) => {
  const todayDate = getDate(new Date(), "long");
  const day = new Date()
    .toLocaleDateString("ru-RU")
    .split(".")
    .reverse()
    .join("-");

  const todayDay = forecast.forecastday.find((el) => el.date === day);


  return (
    <div className="forecastReportDay">
      <div className="forecastReportDay__title">
        <h5>Today</h5>
        <p>{todayDate}</p>
      </div>

      <div className="forecastReportDay__data scrollbar">
        {todayDay && todayDay.hour
          ? todayDay?.hour.map((hour) => (
              <div className="forecastReportDay__data-item">
                <h6>{hour.temp_c}°</h6>
                <img
                  src={findIcon(hour.condition.text)}
                  alt={hour.condition.text}
                />
                <p>{hour.time.split(" ")[1]}</p>
              </div>
            ))
          : "No forecast today"}
      </div>
    </div>
  );
};

export default ForecastReportDay;
