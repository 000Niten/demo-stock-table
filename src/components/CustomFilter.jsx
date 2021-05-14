import React, { useState } from "react";
import "./scss/CustomFilter.scss";

const CustomFilter = (props) => {
	const [showFilter, setShowFilter] = useState(false);
	const filterOptions = [
		{
			title: "DTE",
			dataIndex: "dte",
			key: "1",
			width: 150,
		},
		{
			title: "Strike Prize",
			dataIndex: "strike",
			key: "2",
			width: 150,
		},
		{
			title: "Stock Price",
			dataIndex: "stockPrice",
			key: "3",
			width: 150,
		},
		{
			title: "Call Volume",
			dataIndex: "callVolume",
			key: "4",
			width: 150,
		},
		{
			title: "Call Open Interest",
			dataIndex: "callOpenInterest",
			key: "5",
			width: 150,
		},
		{
			title: "Call Bid Size",
			dataIndex: "callBidSize",
			key: "6",
			width: 150,
		},
		{
			title: "Call Ask Size",
			dataIndex: "callAskSize",
			key: "7",
			width: 150,
		},
		{
			title: "Put Volume",
			dataIndex: "putVolume",
			key: "8",
			width: 150,
		},
		{
			title: "Put Open Interest",
			dataIndex: "putOpenInterest",
			key: "9",
			width: 150,
		},
		{
			title: "Put Bid Size",
			dataIndex: "putBidSize",
			key: "10",
			width: 150,
		},
		{
			title: "Put Ask Size",
			dataIndex: "putAskSize",
			key: "11",
			width: 150,
		},
		{
			title: "Call Bid Price",
			dataIndex: "callBidPrice",
			key: "12",
			width: 150,
		},
		{
			title: "Call Value",
			dataIndex: "callValue",
			key: "13",
			width: 150,
		},
		{
			title: "Call Ask Price",
			dataIndex: "callAskPrice",
			key: "14",
			width: 150,
		},
		{
			title: "Put Bid Price",
			dataIndex: "putBidPrice",
			key: "15",
			width: 150,
		},
		{
			title: "Put Value",
			dataIndex: "putValue",
			key: "16",
			width: 150,
		},
		{
			title: "Put Ask Price",
			dataIndex: "putAskPrice",
			key: "17",
			width: 150,
		},
		{
			title: "call Bid IV",
			dataIndex: "callBidIv",
			key: "18",
			width: 150,
		},
		{
			title: "Call Mid IV",
			dataIndex: "callMidIv",
			key: "19",
			width: 150,
		},
		{
			title: "Call Ask IV",
			dataIndex: "callAskIv",
			key: "20",
			width: 150,
		},
		{
			title: "SMV Vol",
			dataIndex: "smvVol",
			key: "21",
			width: 150,
		},
		{
			title: "Put Bid IV",
			dataIndex: "putBidIv",
			key: "22",
			width: 150,
		},
		{
			title: "Put Mid IV",
			dataIndex: "putMidIv",
			key: "23",
			width: 150,
		},
		{
			title: "Put Ask IV",
			dataIndex: "putAskIv",
			key: "24",
			width: 150,
		},
		{
			title: "Residual Rate",
			dataIndex: "residualRate",
			key: "25",
			width: 150,
		},
		{
			title: "Delta",
			dataIndex: "delta",
			key: "26",
			width: 150,
		},
		{
			title: "Gamma",
			dataIndex: "gamma",
			key: "27",
			width: 150,
		},
		{
			title: "Theta",
			dataIndex: "theta",
			key: "28",
			width: 150,
		},
		{
			title: "Vega",
			dataIndex: "vega",
			key: "29",
			width: 150,
		},
		{
			title: "Rho",
			dataIndex: "rho",
			key: "30",
			width: 150,
		},
		{
			title: "Phi",
			dataIndex: "phi",
			key: "31",
			width: 150,
		},
		{
			title: "Driftless Theta",
			dataIndex: "driftlessTheta",
			key: "32",
			width: 150,
		},
		{
			title: "Call Smv Vol",
			dataIndex: "callSmvVol",
			key: "33",
			width: 150,
		},
		{
			title: "Put Smv Vol",
			dataIndex: "putSmvVol",
			key: "34",
			width: 150,
		},
		{
			title: "Ext Smv Vol",
			dataIndex: "extSmvVol",
			key: "35",
			width: 150,
		},
		{
			title: "Ext Call Value",
			dataIndex: "extCallValue",
			key: "36",
			width: 150,
		},
		{
			title: "Ext Put Value",
			dataIndex: "extPutValue",
			key: "37",
			width: 150,
		},
		{
			title: "Spot Price",
			dataIndex: "spotPrice",
			key: "38",
			width: 150,
		},
		{
			title: "Quote Date",
			dataIndex: "quoteDate",
			key: "39",
			width: 150,
		},
		{
			title: "Updated at",
			dataIndex: "updatedAt",
			key: "40",
			width: 150,
		},
		{
			title: "Snapshot Est Time",
			dataIndex: "snapShotEstTime",
			key: "41",
			width: 150,
		},
		{
			title: "Snapshot Date",
			dataIndex: "snapShotDate",
			key: "42",
			width: 150,
		},
		{
			title: "Expiry Tod",
			dataIndex: "expiryTod",
			key: "43",
			width: 150,
		},
	];

	return (
		<div id="custom-filter">
			<div
				className="filter-text"
				onClick={() => {
					setShowFilter(!showFilter);
				}}
			>
				<button className="filter-btn">Filter</button>
			</div>
			<div
				className={`filter-items ${showFilter ? "open-filter-container" : ""}`}
			>
				{filterOptions.map((item, index) => {
					return (
						<div className="label-container" key={index}>
							<label className="custom-checkbox-container">
								<input
									type="checkbox"
									id={item.dataIndex}
									name={item.dataIndex}
									onChange={(event) => props.handleFilterSelection(event)}
								/>
								<div className="text">{item.title}</div>
							</label>
						</div>
					);
				})}
				<div className="apply-btn-container">
					<button
						className="btn"
						onClick={() => {
							props.applyFilter();
							setShowFilter(!showFilter);
						}}
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default CustomFilter;
