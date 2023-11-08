import 'chart.js/auto';
import React from "react";
import { Line, Bar, PolarArea } from 'react-chartjs-2';
import {useState, useEffect, useRef} from 'react';
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    const [cases, setCases] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [deathsChart, setDeathsChart] = useState([]);
    const [casesChart, setCasesChart] = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(()=>{
        console.log("hello")
        axios.get('https://api.covid19api.com/summary')
        .then((response)=>{
            console.log(response.data.Global);
            setData(response.data.Global);
            setCases(response.data.Global.TotalConfirmed);
            setDeaths(response.data.Global.TotalDeaths);

            for(let i = 0; i < data.length; i++){
                cases.push({caseTotal:cases});
                deaths.push({deathTotal:deaths});
            }

            setCasesChart(cases);
            setDeathsChart(deaths);

            let barChartData = [
                casesChart,
                deathsChart
            ]

            setChartData(barChartData);

        });
    },  []);

    let recoveries = cases - deaths;

    return(
        <div className="Home">

            <div className='leftBlock'>
                <div className="AboutBlock">
                    <div className='Image'></div>

                    <div className='welcomeText'>
                        <h1>Covid-19 statistics</h1>
                        <br/>
                        <p>Covid-19 Statistics shows the daily statistics of the number of cases, deaths and recoveries in each country.</p>
                    </div>
                </div>

                <div className="ComparativeData">
                    <h3 className="">Comparative Data</h3>
                    <div className="chart">
                        <Bar 
                            data={{
                                labels: ['Cases', 'Deaths'],
                                datasets: [{
                                    label: '# COVID19 Cases',
                                    data: chartData,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                    ],
                                        borderWidth: 1
                                    },
                                ],
                                }} 
                                height={200} 
                                width={100}  
                                options={{maintainAspectRatio: false,}}
                        />
                    </div>
                </div> 

                <div className='historyData'></div>

                <div className='globalStats'>
                    <div className='cases'>
                        <h1>{cases}</h1>
                        <p>Cases</p>
                    </div>

                    <div className='deaths'>
                        <h1>{deaths}</h1>
                        <p>Deaths</p>
                    </div>

                    <div className='recoveries'>
                        <h1>{recoveries}</h1>
                        <p>Recoveries</p>
                    </div>
                </div>
            </div>

            <div className='rightBlock'>
                <div className='precautions'>
                    <h3>Precautionary Steps</h3>

                    <div className='tip'>
                        <div className='vaccination'></div>
                        <p><strong>1. </strong>Get vaccinated.</p>
                    </div>

                    <div className='tip'>
                        <div className='washHands'></div>
                        <p><strong>2. </strong>Wash your hands regularly.</p>
                    </div>
                    
                    <div className='tip'>
                        <div className='distance'></div>
                        <p><strong>3. </strong>Keep a safe distance from people.</p>
                    </div>

                    <div className='tip'>
                        <div className='mask'></div>
                        <p><strong>3. </strong>Wear a face mask.</p>
                    </div>
                </div>

                <div className='face mask'></div>
            </div>
            
        </div>
    );
}

export default Home;