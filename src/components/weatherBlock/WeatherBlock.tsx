import "./weatherBlock.css";

type weatherType = {
  current: {
    condition: {
      text: string;
    };
    temp_c: number;
    wind_kph: number;
    gust_kph: number;
    humidity: number;
  };
  location: {
    name: string;
  };
};

const WeatherBlock = ({ weather }: { weather: weatherType }) => {
  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
  return (
    <div className="weatherBlock">
      <p className="weatherBlock__date">Today, {today}</p>
      <div className="weatherBlock__temp">
        <h5>
          {weather.current.temp_c} <span>°</span>
        </h5>
        <p>{weather.current.condition.text}</p>
      </div>

      <div className="weatherBlock__data">
        <div className="weatherBlock__data-item">
          <div className="weatherBlock__data-item-img">
            <img src="/wind.svg" alt="" />
            <p>Wind</p>
          </div>
          <span>|</span>
          <p>{weather.current.gust_kph} km/h</p>
        </div>
        <div className="weatherBlock__data-item">
          <div className="weatherBlock__data-item-img">
            <img src="/hum.svg" alt="" />
            <p>Hum</p>
          </div>
          <span>|</span>
          <p>{weather.current.humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherBlock;
