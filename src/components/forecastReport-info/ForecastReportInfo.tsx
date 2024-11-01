import ForecastReportDay from "../forecastReport-day/ForecastReportDay";
import ForecastReportWeek from "../forecastReport-week/ForecastReportWeek";
import { Iforecast } from "../forecastReport/ForecastReport";
import "./forecastReportInfo.css";
const ForecastReportInfo = ({ forecast }: { forecast: Iforecast }) => {

  return (
    <div className="forecastReportInfo">
      <ForecastReportDay forecast={forecast} />
      <ForecastReportWeek forecast={forecast} />
    </div>
  );
};

export default ForecastReportInfo;
