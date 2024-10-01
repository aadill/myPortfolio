// src/RadarChart.js
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "./chart.css";
import { useTheme } from "./ThemeContext";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme == "dark" ? true : false;
  const data = {
    labels: [
      "Analytical Thinking",
      "Statistical Knowledge",
      "Data Visualization",
      "Programming",
      "Machine Learning",
      "Business Acumen",
      "Communication Skills",
    ],
    datasets: [
      {
        label: "Current Skill Level",
        data: [75, 80, 85, 70, 65, 60, 90],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Required Skill Level",
        data: [90, 85, 90, 80, 75, 85, 95],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? "white" : "black",
          // This more specific font property overrides the global property
          ffont: function (context) {
            var width = context.chart.width;
            var height = context.chart.height;
            var size = Math.round(Math.min(width, height) / 32);
            return { size: size, weight: "bold" };
          },
        },
        display: true, // Hide the legend
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        pointLabels: {
          color: isDarkMode ? "white" : "black", // Change radar chart labels color
          font: function (context) {
            var width = context.chart.width;
            var height = context.chart.height;
            var size = Math.round(Math.min(width, height) / 42);
            return { size: size, weight: "bold" };
          },
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="chart-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
