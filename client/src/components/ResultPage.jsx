import React from "react";
import Header from "./Header";

const ResultPage = () => {
	return (
		<>
			<Header />
			<div className="ResultPage">
				<span>Results </span>
				<div>
					<div className="leftResult">
						<span>Fire & Explosion Index</span>
					</div>
					<div className="middleResult">:</div>
					<div className="rightResult">23</div>
				</div>
				<div>
					<div className="leftResult">
						<span>Radius of Exposure</span>
					</div>
					<div className="middleResult">:</div>
					<div className="rightResult">23</div>
				</div>
				<div>
					<div className="leftResult">
						<span>Area of Exposure</span>
					</div>
					<div className="middleResult">:</div>
					<div className="rightResult">23</div>
				</div>
				<div>
					<div className="leftResult">
						<span>Value of Area of Exposure</span>
					</div>
					<div className="middleResult">:</div>
					<div className="rightResult">23</div>
				</div>
				<div>
					<div className="leftResult">
						<span>Damage Factor</span>
					</div>
					<div className="middleResult">:</div>
					<div className="rightResult">23</div>
				</div>
				<div>
					<div className="leftResult">
						<span>Loss Control Credil Faclor</span>
					</div>
					<div className="middleResult">:</div>
					<div className="rightResult">23</div>
				</div>
			</div>
		</>
	);
};

export default ResultPage;
