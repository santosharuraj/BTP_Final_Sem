import { Card } from "@mui/material";

const ResultCard = ({ data }) => {
	return (
		<>
			<Card className="outputCard">
				<span>Result </span>
				<span className="title">Selected Material</span>
				<div className="resultClass">
					<div className="left">
						<div>
							<span>
								{Object.keys(data).length > 0 &&
									data != null &&
									data != undefined &&
									data.Material}
							</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue">
								{Object.keys(data).length > 0 &&
									data != null &&
									data != undefined &&
									data.MaterialFactor + `(Material Factor)`}
							</span>
						</div>
					</div>
				</div>
				<span className="title">Selected General Process Hazards</span>
				<div className="resultClass">
					<div className="left">
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								data != undefined &&
								data.GeneralProcessHazard.map((item) => {
									return (
										<>
											<span>{item.details[0].text}</span>
										</>
									);
								})}
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								data != undefined &&
								data.GeneralProcessHazard.map((item) => {
									return (
										<>
											<span className="userValue">
												{item.details[0].userInput}
											</span>
										</>
									);
								})}
						</div>
					</div>
				</div>

				<span className="title">Selected Special Process Hazards</span>
				<div className="resultClass">
					<div className="left">
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								data != undefined &&
								data.SpecialProcessHazard.map((item) => {
									return (
										<>
											<span>{item.details[0].text}</span>
										</>
									);
								})}
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								(data != undefined) != null &&
								data != undefined &&
								data.SpecialProcessHazard.map((item) => {
									return (
										<>
											<span className="userValue">
												{item.details[0].userInput}
											</span>
										</>
									);
								})}
						</div>
					</div>
				</div>

				<div className="resultClass">
					<div className="left">
						<div>
							<span className="title">Fire & Explosion Index </span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue1">
								{Object.keys(data).length > 0 &&
									data != null &&
									data != undefined &&
									data.FireExplosionIndex}
							</span>
						</div>
					</div>
				</div>

				<div className="resultClass">
					<div className="left">
						<div>
							<span className="title">Radius of Exposure</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue">{data.RadiusOfExposure}</span>
						</div>
					</div>
				</div>
				<div className="resultClass">
					<div className="left">
						<div>
							<span className="title">Loss Control Credit Factor (LCCF)</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue">{data.LossControlCredit_Factor}</span>
						</div>
					</div>
				</div>
				<div className="resultClass">
					<div className="left">
						<div>
							<span className="title">Area of Exposure</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue">{data.AreaOfExposure} ㎡</span>
						</div>
					</div>
				</div>
				<div className="resultClass">
					<div className="left">
						<div>
							<span className="title">Damage Factor</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue">{data.DamageFactor}</span>
						</div>
					</div>
				</div>

				<div className="resultClass">
					<div className="left">
						<div>
							<span className="title" style={{ color: "green" }}>
								DEGREE OF HAZARD
							</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue1" style={{ color: "red" }}>
								{data.FireExplosionIndex >= 1 && data.FireExplosionIndex <= 60
									? "Light"
									: data.FireExplosionIndex >= 61 &&
									  data.FireExplosionIndex <= 96
									? "Moderate"
									: data.FireExplosionIndex >= 97 &&
									  data.FireExplosionIndex <= 127
									? "Intermediate"
									: data.FireExplosionIndex >= 128 &&
									  data.FireExplosionIndex <= 158
									? "Heavy"
									: data.FireExplosionIndex >= 159 && "Severe"}
							</span>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default ResultCard;
