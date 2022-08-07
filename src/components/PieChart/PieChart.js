import "./PieChart.css";
import React, { Component } from "react";

const PieChart = () => {
	let percent = 83.2;
	return (
		<div className="">
			<div className="pie" style={{ "--percentage": percent }}>
				<h2>{percent} %</h2>
				<p>Identified As Real User</p>
			</div>
		</div>
	);
};

export default PieChart;
