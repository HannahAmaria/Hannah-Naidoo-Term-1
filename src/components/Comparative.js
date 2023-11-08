import { Bar, Doughnut, PolarArea } from "react-chartjs-2";
import Data from '../components/data.js';
import { useState, useRef } from "react";

function Comparative() {
  const [country, setCountry] = useState("");
  const selectedCountry = useRef(null);

  const getCountry = () => {
    setCountry(selectedCountry.current.value);
  };

  const findData = (countryName) => {
    return Data.find((item) => item.Country === countryName);
  };

  const cases = {
    labels: ["Confirmed Cases", "Recovered Cases", "Active Cases", "Deaths"],
    datasets: [
      {
        label: "Number of Cases",
        data: [
          findData(country)?.TotalConfirmed,
          findData(country)?.TotalRecovered,
          findData(country)?.TotalConfirmed - findData(country)?.TotalRecovered - findData(country)?.TotalDeaths,
          findData(country)?.TotalDeaths,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const deathsAndRecoveries = {
    labels: ["Deaths", "Recoveries"],
    datasets: [
      {
        label: "Number of Deaths and Recoveries",
        data: [findData(country)?.TotalDeaths, findData(country)?.TotalRecovered],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const comparativeChart = {
    labels: ["Confirmed Cases", "Deaths", "Recovered Cases"],
    datasets: [
      {
        label: "Comparative Chart",
        data: [
          findData(country)?.TotalConfirmed,
          findData(country)?.TotalDeaths,
          findData(country)?.TotalRecovered,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="Comparative">
      <div className="pageIntro">
        <h1>Comparative Data</h1>
        <p>Comparative data between COVID-19 cases and deaths.</p>
      </div>
  
      <select className="CountrySelect" onChange={getCountry} ref={selectedCountry}>
        <option>Select Country</option>
        {Data.map((item) => (
          <option key={item.ID}>{item.Country}</option>
        ))}
      </select>
  
      <div className="leftContainer">
        <div className="confirmedCases">
          <h3>Confirmed Cases</h3>
          <div className="chart barChart">
            <Bar data={cases} />
          </div>
        </div>
      </div>
  
      <div className="rightContainer">
        <div className="Deaths">
          <h3>Deaths and Recoveries</h3>
          <div className="chart">
            <Doughnut
              data={deathsAndRecoveries}
              height={200}
              width={400}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
  
        <div className="comparativeBlock chart">
          <PolarArea
            data={comparativeChart}
            height={200}
            width={400}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  )};

  export default Comparative;
