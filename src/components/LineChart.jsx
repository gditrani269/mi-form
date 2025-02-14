// ./components/LineChart.jsx
import React from "react";
import Chart from "chart.js/auto";
// npm install react-chartjs-2@latest
// npm install chart.js@latest

import { Line } from "react-chartjs-2";

export const LineChart = () => {
    console.log ("LineChart - pasa aqui??");
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    return (
        <div>
            <Line data={data} />
                aca sale algo
        </div>
    );
}