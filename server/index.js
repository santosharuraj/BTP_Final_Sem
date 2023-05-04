import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserModal from "./modal/UserModal.js";
import bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.use(cors());
const URL =
	"mongodb+srv://santosh:santosh@cluster0.pofybql.mongodb.net/UserData?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
	.connect(URL, { useNewUrlParser: true })
	.then(() => {
		app.listen(5000, () => {
			console.log("Port is running at 5000");
		});
	})
	.catch((err) => {
		console.log(err);
	});

app.post("/register", async (req, res) => {
	const { email, password, cpassword } = req.body;
	try {
		if (!email || !password || !cpassword) {
			return res.status(400).json("Fill all the fields");
		}
		if (password !== cpassword) {
			return res
				.status(400)
				.json("Password and ConfirmPassword doest not matched");
		}

		const hashPassword = await bcyrpt.hash(password, 10);
		const newUser = await UserModal({ email, password: hashPassword });
		const emailExist = await UserModal.findOne({ email });
		if (emailExist) {
			return res.status(400).json("Email already exist");
		}

		await newUser.save();
		const token = jwt.sign({ id: newUser._id }, "secret_key", {
			expiresIn: "3d",
		});
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json(error.message);
	}
});

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const exist = await UserModal.findOne({ email });

		if (!exist) {
			return res.status(400).json("User does not exist");
		}
		const password_matched = await bcyrpt.compare(password, exist.password);
		if (password_matched) {
			return res.status(200).json(exist);
		}
		res.status(400).json("Something went wrong");
	} catch (error) {
		res.status(500).json(error.message);
	}
});
