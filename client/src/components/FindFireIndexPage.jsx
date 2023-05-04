import Header from "./Header";
import {
	material,
	GeneralProcessHazard,
	SpecialProcessHazard,
	Process_Control_Credit_Factor,
	Material_Isolation_Credit_Factor,
	Fire_Protection_Credit_Factor,
	Additional_Information,
} from "../utils/data";
import { Button, Card, IconButton, Snackbar, TextField } from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ResultCard from "./ResultCard";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const FindFireIndex = () => {
	const [checked, setChecked] = useState([]);
	const [checkedSpec, setCheckedSpec] = useState([]);
	const [errormsg, setErrorMsg] = useState("");
	const [materialSelected, setMaterialSelected] = useState([]);
	const [materialSelectedMF, setMaterialSelectedMF] = useState([]);
	const [error, setError] = useState(false);
	const [wrongdatasubmit, serWrongDataSubmit] = useState(false);
	const [sucesssubmit, setSucessSubmit] = useState(false);
	const [data, setData] = useState([]);
	const [result, setResult] = useState(false);
	const [lossCCF, setLossCCF] = useState({ c1: 0, c2: 0, c3: 0 });
	const user = JSON.parse(localStorage.getItem("User"));
	const handleChange1 = (event) => {
		const {
			target: { value },
		} = event;
		setMaterialSelected(typeof value === "string" ? value.split(",") : value);
	};

	const getValue = (value) => {
		console.log(value.MF);
		setMaterialSelectedMF(value.MF);
	};

	const onChangeValue = (e, id) => {
		for (let i = 0; i < GeneralProcessHazard.length; i++) {
			if (GeneralProcessHazard[i].id == id) {
				if (
					e.target.value >= GeneralProcessHazard[i].low &&
					e.target.value <= GeneralProcessHazard[i].high
				) {
					GeneralProcessHazard[i].userInput = e.target.value;
					setError(false);
					setErrorMsg("");
				} else {
					setError(true);
					setErrorMsg(id);
				}
			}
		}
	};

	const onChangeValueSpec = (e, id) => {
		for (let i = 0; i < SpecialProcessHazard.length; i++) {
			if (SpecialProcessHazard[i].id == id) {
				if (
					e.target.value >= SpecialProcessHazard[i].low &&
					e.target.value <= SpecialProcessHazard[i].high
				) {
					SpecialProcessHazard[i].userInput = e.target.value;
					setError(false);
					setErrorMsg("");
				} else {
					setError(true);
					setErrorMsg(id);
				}
			}
		}
	};

	const handleChange = (e, id) => {
		if (checked.length > 0) {
			for (let i = 0; i < checked.length; i++) {
				if (checked[i].id == id) {
					let arr = checked.filter((obj) => obj.id !== id);
					setChecked(arr);
				} else {
					if (e.target.checked) {
						let obj = GeneralProcessHazard.filter((obj) => obj.id == id);

						setChecked([
							...checked,
							{ checked: e.target.checked, id: id, details: obj },
						]);
					}
				}
			}
		} else {
			if (e.target.checked) {
				let obj = GeneralProcessHazard.filter((obj) => obj.id == id);
				setChecked([
					...checked,
					{ checked: e.target.checked, id: id, details: obj },
				]);
			}
		}
	};

	const handleChangeSpec = (e, id) => {
		if (checkedSpec.length > 0) {
			for (let i = 0; i < checkedSpec.length; i++) {
				if (checkedSpec[i].id == id) {
					let arr = checkedSpec.filter((obj) => obj.id !== id);
					setCheckedSpec(arr);
				} else {
					if (e.target.checked) {
						let obj = SpecialProcessHazard.filter((obj) => obj.id == id);
						setCheckedSpec([
							...checkedSpec,
							{ checked: e.target.checked, id: id, details: obj },
						]);
					}
				}
			}
		} else {
			if (e.target.checked) {
				let obj = SpecialProcessHazard.filter((obj) => obj.id == id);
				setCheckedSpec([
					...checkedSpec,
					{ checked: e.target.checked, id: id, details: obj },
				]);
			}
		}
	};

	const [c1, setC1] = useState({});
	const [c2, setC2] = useState({});
	const [c3, setC3] = useState({});
	const [radiusOfExposure, setRadiusOfExposure] = useState(0);
	const onChangeC1 = (e) => {
		setC1({ ...c1, [e.target.name]: e.target.value });
	};
	const onChangeC2 = (e) => {
		setC2({ ...c2, [e.target.name]: e.target.value });
	};
	const onChangeC3 = (e) => {
		setC3({ ...c3, [e.target.name]: e.target.value });
	};

	const onChangeRadius = (e) => {
		console.log(e.target.value);
		setRadiusOfExposure(e.target.value);
	};
	const handleSubmit = () => {
		// console.log(materialSelectedMF);
		// console.log(checked);
		// console.log(checkedSpec);
		console.log("loss credit1", c1);
		console.log("loss credit2", c2);
		console.log("loss credit3", c3);
		let c1_value = 0;
		let c2_value = 0;
		let c3_value = 0;

		for (let key in c1) {
			if (c1.hasOwnProperty(key)) {
				c1_value += parseFloat(c1[key]);
			}
		}
		for (let key in c2) {
			if (c2.hasOwnProperty(key)) {
				c2_value += parseFloat(c2[key]);
			}
		}
		for (let key in c3) {
			if (c3.hasOwnProperty(key)) {
				c3_value += parseFloat(c3[key]);
			}
		}

		console.log("Total power value1: ", c1_value);
		console.log("Total power value2: ", c2_value);
		console.log("Total power value3: ", c3_value);

		const LCCF = c1_value * c2_value * c3_value;
		console.log(LCCF);
		if (
			error ||
			checked.length == 0 ||
			checkedSpec == 0 ||
			!materialSelected[0]
		) {
			console.log("errr1");
			serWrongDataSubmit(true);
		} else {
			let F1 = 1;
			for (let i = 0; i < checked.length; i++) {
				if (checked[i].details[0].userInput == "") {
					return serWrongDataSubmit(true);
				} else {
					serWrongDataSubmit(false);
					F1 += parseFloat(checked[i].details[0].userInput);
				}
			}

			let F2 = 1;
			for (let i = 0; i < checkedSpec.length; i++) {
				if (checkedSpec[i].details[0].userInput == "") {
					return serWrongDataSubmit(true);
				} else {
					serWrongDataSubmit(false);
					F2 += parseFloat(checkedSpec[i].details[0].userInput);
				}
			}
			let F3 = F1 * F2;
			let AreaOfExposure = 3.14 * radiusOfExposure * radiusOfExposure;
			let FEI = F3 * materialSelectedMF;

			const damageFactor = (FEI * AreaOfExposure) / 500000;
			let data = {
				userId: "",
				Material: materialSelected[0],
				MaterialFactor: materialSelectedMF,
				GeneralProcessHazard: checked,
				SpecialProcessHazard: checkedSpec,
				FireExplosionIndex: FEI,
				RadiusOfExposure: radiusOfExposure,
				LossControlCredit_Factor: LCCF,
				AreaOfExposure: 3.14 * radiusOfExposure * radiusOfExposure,
				DamageFactor: damageFactor,
			};

			console.log("radiusOfExposure", radiusOfExposure);
			if (FEI) {
				setData(data);
				setResult(true);
				setSucessSubmit(true);
			}
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		serWrongDataSubmit(false);
	};

	const action = (
		<React.Fragment style={{ backgroundColor: "red" }}>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<>
			<Header />
			{user ? (
				<>
					<div className="FindFEI">
						<span>Fire Risk Evaluation</span>

						<FormControl sx={{ m: 1, width: 300 }} style={{ width: "455px" }}>
							<InputLabel id="demo-multiple-name-label">
								Select Material
							</InputLabel>
							<Select
								labelId="demo-multiple-name-label"
								id="demo-multiple-name"
								value={materialSelected}
								onChange={handleChange1}
								input={<OutlinedInput label="Select Material" />}
								MenuProps={MenuProps}
							>
								{material.map((name, id) => (
									<MenuItem
										key={id}
										value={name.name}
										onClick={() => getValue(name)}
									>
										{name.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<div className="each_item">
							<span>Fire & Explosion Index</span>
							<Card className="heading">
								<div>
									<span>Select General Process Hazards (F1)</span>
								</div>
								<div>
									<span style={{ color: "blue" }}>Penalty Factor Range</span>
								</div>
							</Card>
							{GeneralProcessHazard.map((item) => {
								return (
									<>
										<div>
											<div>
												<input
													type="checkbox"
													onChange={(e) => handleChange(e, item.id)}
												/>
												<span>{item.text}</span>
											</div>
											<div>
												<TextField
													className="inputclass"
													label={item.range}
													name={item.text}
													error={error && errormsg == item.id}
													type="number"
													disabled={
														checked.filter((obj) => obj.id == item.id).length >
														0
															? false
															: true
													}
													onChange={(e) => onChangeValue(e, item.id)}
													inputProps={{
														step: "0.1",
													}}
												/>
											</div>
										</div>
									</>
								);
							})}
						</div>

						<div className="each_item">
							<Card className="heading">
								<div>
									<span>Select Special Process Hazards (F2)</span>
								</div>
								<div>
									<span style={{ color: "blue" }}>Penalty Factor Range</span>
								</div>
							</Card>
							{SpecialProcessHazard.map((item) => {
								return (
									<>
										<div>
											<div>
												<input
													type="checkbox"
													onChange={(e) => handleChangeSpec(e, item.id)}
												/>
												<span>{item.text}</span>
											</div>
											<div>
												<TextField
													className="inputclass"
													label={item.range}
													name={item.text}
													error={error && errormsg == item.id}
													// helperText={
													// 	error && errormsg == item.id
													// 		? `Value must between ${item.low} and ${item.high}`
													// 		: ""
													// }
													type="number"
													inputProps={{
														maxLength: 13,
														step: "0.1",
													}}
													disabled={
														checkedSpec.filter((obj) => obj.id == item.id)
															.length > 0
															? false
															: true
													}
													onChange={(e) => onChangeValueSpec(e, item.id)}
												/>
											</div>
										</div>
									</>
								);
							})}
						</div>

						<div className="each_item">
							<span>Loss Control Credit Factor</span>
							<Card className="heading">
								<div>
									<span>Process Control Credit Factor (C1)</span>
								</div>
								<div>
									{/* <span style={{ color: "blue" }}>Penalty Factor Range</span> */}
								</div>
							</Card>
							{Process_Control_Credit_Factor.map((item) => {
								return (
									<>
										<div>
											<div>
												{/* <input
											type="checkbox"
											onChange={(e) => handleChangeSpec(e, item.id)}
										/> */}
												<span>{item.text}</span>
											</div>
											<div>
												<TextField
													className="inputclass"
													label={item.range}
													name={item.text}
													error={error && errormsg == item.id}
													type="number"
													inputProps={{
														maxLength: 13,
														step: "0.1",
													}}
													onChange={(e) => onChangeC1(e, item.id)}
												/>
											</div>
										</div>
									</>
								);
							})}
						</div>

						<div className="each_item">
							<Card className="heading">
								<div>
									<span>Material Isolation Credit Factor (C2)</span>
								</div>
								<div>
									{/* <span style={{ color: "blue" }}>Penalty Factor Range</span> */}
								</div>
							</Card>
							{Material_Isolation_Credit_Factor.map((item) => {
								return (
									<>
										<div>
											<div>
												{/* <input
											type="checkbox"
											onChange={(e) => handleChangeSpec(e, item.id)}
										/> */}
												<span>{item.text}</span>
											</div>
											<div>
												<TextField
													className="inputclass"
													label={item.range}
													name={item.text}
													error={error && errormsg == item.id}
													type="number"
													inputProps={{
														maxLength: 13,
														step: "0.1",
													}}
													onChange={(e) => onChangeC2(e, item.id)}
												/>
											</div>
										</div>
									</>
								);
							})}
						</div>

						<div className="each_item">
							<Card className="heading">
								<div>
									<span>Fire Protection Credit Factor (C3)</span>
								</div>
								<div>
									{/* <span style={{ color: "blue" }}>Penalty Factor Range</span> */}
								</div>
							</Card>
							{Fire_Protection_Credit_Factor.map((item) => {
								return (
									<>
										<div>
											<div>
												{/* <input
											type="checkbox"
											onChange={(e) => handleChangeSpec(e, item.id)}
										/> */}
												<span>{item.text}</span>
											</div>
											<div>
												<TextField
													className="inputclass"
													label={item.range}
													name={item.text}
													error={error && errormsg == item.id}
													type="number"
													inputProps={{
														maxLength: 13,
														step: "0.1",
													}}
													onChange={(e) => onChangeC3(e, item.id)}
												/>
											</div>
										</div>
									</>
								);
							})}
						</div>

						<div className="each_item">
							<Card className="heading">
								<div>
									<span>Other Additonal Information</span>
								</div>
								<div>
									{/* <span style={{ color: "blue" }}>Penalty Factor Range</span> */}
								</div>
							</Card>
							<>
								<div>
									<div>
										{/* <input
											type="checkbox"
											onChange={(e) => handleChangeSpec(e, item.id)}
										/> */}
										<span>Radius of Exposure</span>
									</div>
									<div>
										<TextField
											className="inputclass"
											label={"Radius of Exposure ( in meter)"}
											name={"Radius of Exposure"}
											// error={error && errormsg == item.id}
											type="number"
											inputProps={{
												maxLength: 13,
												step: "0.1",
											}}
											onChange={onChangeRadius}
										/>
									</div>
								</div>
							</>
						</div>
						<Button variant="contained" onClick={handleSubmit}>
							Submit
						</Button>
						{result && <ResultCard data={data} />}

						<Snackbar
							className="firstsnack"
							open={wrongdatasubmit}
							autoHideDuration={2000}
							onClose={handleClose}
							message="Invalid Input Value.Please check it out"
							action={action}
						/>
						<Snackbar
							className="Secondsnack"
							open={sucesssubmit}
							autoHideDuration={2000}
							onClose={() => setSucessSubmit(false)}
							message="Successfuly have been got the result !"
							action={action}
						/>
					</div>
				</>
			) : (
				<>
					{" "}
					<div className="FindFEI">
						<span style={{ color: "black" }}>
							Login First then you can use it !
						</span>
					</div>
				</>
			)}
		</>
	);
};

export default FindFireIndex;
