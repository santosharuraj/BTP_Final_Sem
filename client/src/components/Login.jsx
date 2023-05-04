import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import Register from "./Register";
const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email must be a valid")
		.required("Email is required "),
	password: yup.string().required("Password is required"),
});
const Login = () => {
	const [submitting, setSubmitting] = useState(false);
	const [errormessage, setErrorMessage] = useState("");
	const [openRegModal, setOpenRegModal] = useState(false);
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
		setSubmitting(true);
		console.log(data);
		const response = await fetch("http://localhost:5000/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (response.status == 200) {
			const data = await response.json();
			console.log(data);
			localStorage.setItem("User", JSON.stringify(data));
			setSubmitting(false);
			window.location.reload(false);
			setErrorMessage("");
		} else {
			console.log(response);
			setSubmitting(false);
			setErrorMessage("Something went wrong");
		}
	};
	const handleSwitch = (value) => {
		setOpenRegModal(true);
		// if (value == "Login") {
		// 	setLogin(true);
		// 	reset();
		// } else if (value == "register") {
		// 	setLogin(false);
		// 	reset();
		// }
	};
	return (
		<>
			{openRegModal ? (
				<Register />
			) : (
				<div className="LoginPage">
					<span>Login</span>
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
							<div className="loginLink">
								<span>Have you not registered?</span>
								<span onClick={() => handleSwitch("register")}> Register</span>
							</div>
							<span style={{ color: "red" }}>{errormessage}</span>
							<input type="submit" value="Login" className="loginButton" />
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default Login;
