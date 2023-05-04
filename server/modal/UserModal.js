import mongoose from "mongoose";

const schema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const UserModal = new mongoose.model("User", schema);

export default UserModal;
