"use client";

import { useEffect, useRef } from "react";
import "chartist/dist/chartist.css";


export default function YearlySalesChart() {
    const chartsRef = useRef(null);
    useEffect(() => {
	if(!chartsRef.current) return;
    const Chartist = require("chartist");


	require("chartist-plugin-tooltips");
	console.log(Chartist.plugins);
	console.log(Chartist.plugins?.tooltip);
	const chart = new Chartist.Line(
	    chartsRef.current,
	    {
		labels: [
		    "2008",
		    "2009",
		    "2010",
		    "2011",
		    "2012",
		    "2013",
		    "2014",
		    "2015",
		],
		series: [
		    [5, 2, 7, 4, 5, 3, 5, 4],
		    [2, 5, 2, 6, 2, 5, 2, 4],
		],
	    },
	    
	    {
		top: 0,
		low: 1,
		showPoint: true,
		fullWidth: true,
		showArea: true,
		plugins: [
		    Chartist.plugins.tooltip()
		]
	    },

	);
	return () => chart.destroy?.();
    }, []);


    return <div className="salesChart" ref={chartsRef} style={{
	width: "100%",
	height: "405px",
	position: "relative",
    }} />;
}
