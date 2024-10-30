import { useEffect, useState } from "react";
import WeatherBlock from "./components/weatherBlock/WeatherBlock";
import "./css/main.css";
import Search from "./components/search/Search";

function App() {
  const [data, setData] = useState({
    current: {
      condition: {
        text: "",
        icon: "",
      },
      temp_c: 0,
      wind_kph: 0,
      gust_kph: 0,
      humidity: 0,
    },
    location: {
      name: "",
    },
    error: {
      message: "",
    },
  });
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState("New York");

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${inputValue}`
      );

      const result = await data.json();
      setData(result);
    };
    getWeather();
  }, [inputValue]);

  console.log(data);

  return (
    <div className="App">
      {data.error && data.error.message ? (
        <div className="wrapper">
          <h1 className="error">{data.error.message}</h1>
          <button
            className="error__btn"
            onClick={() => setInputValue("New York")}
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="wrapper">
          <div className="top">
            {openSearch ? (
              <Search
                inputValue={inputValue}
                setInputValue={setInputValue}
                setOpenSearch={setOpenSearch}
              />
            ) : (
              <>
                <button
                  onClick={() => setOpenSearch(!openSearch)}
                  className="top__location"
                >
                  <img
                    className="top__location-img"
                    src="/location.png"
                    alt="location"
                  />
                  <h5>{data.location.name}</h5>
                  <img src="/arrow-down.svg" alt="arrow" />
                </button>
                <div className="top__notifications">
                  <button>
                    <img src="/notifications.svg" alt="" />
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="weather-img">
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
          </div>

          <WeatherBlock weather={data} />
        </div>
      )}
      <div className="bg" />
    </div>
  );
}

export default App;
