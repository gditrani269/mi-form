// ./components/LineChart.jsx
import React from "react";
import Chart from "chart.js/auto";
// npm install react-chartjs-2@latest


import { Line } from "react-chartjs-2";

export const LineChart = ({valor, size}) => {
    console.log ("LineChart - pasa aqui??");
//    console.log ("LineChart - valor" + valor);
    let labels2 = [size];
    for (let i = 0; i < size; i = i + 1) {
        labels2 [i] = i;
    }
    console.log ("labels2 - valor " + size);
    const data = {
        labels: labels2,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: valor, //[0, 10, 5, 2, 20, 30, 45],
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