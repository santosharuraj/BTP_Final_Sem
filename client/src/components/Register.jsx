import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import Login from "./Login";
const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email must be a valid")
		.required("Email is required "),
	password: yup.string().required("Password is required"),
	cpassword: yup
		.string()
		.required("Confirm Password is required")
		.oneOf([yup.ref("password")], "Password doest not match"),
});
const Register = () => {
	const [submitting, setSubmitting] = useState(false);
	const [errormessage, setErrorMessage] = useState("");
	const [openloginModal, setOpenLoginModal] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmitHandler = async (data) => {
		const body = {
			email: data.email,
			password: data.password,
		};
		setSubmitting(true);
		console.log(data);
		const response = await fetch("http://localhost:5000/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (response.status == 201) {
			const data = await response.json();
			console.log(data);
			localStorage.setItem("User", JSON.stringify(data));

			window.location.reload(false);
			navigate("/");
			setErrorMessage("");
			reset();
		} else if (response.status == 403) {
			setErrorMessage("Please enter correct credentials");
		} else {
			console.log(response);

			setErrorMessage("Something went wrong");
			reset();
		}
		setSubmitting(false);
	};
	const handleSwitch = (value) => {
		setOpenLoginModal(true);
	};
	return (
		<>
			{openloginModal ? (
				<Login />
			) : (
				<div className="LoginPage">
					<span>{submitting ? "Loading" : "Register"}</span>
					<form onSubmit={handleSubmit(onSubmitHandler)}>
						<div className="formDiv">
							<input
								type="text"
								{...register("email")}
								placeholder="Enter Email"
							/>
							<span className="errortext">{errors.email?.message}</span>
							<input
								type="text"
								{...register("password")}
								placeholder="Enter Password"
							/>
							<span className="errortext">{errors.password?.message}</span>
							<input
								type="text"
								{...register("cpassword")}
								placeholder="Enter Confirm Password"
							/>
							<span className="errortext">{errors.cpassword?.message}</span>
							<div className="loginLink">
								<span>Have you already registered?</span>
								<span onClick={() => handleSwitch("register")}> Login</span>
							</div>
							<input type="submit" value="Register" className="loginButton" />
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default Register;
