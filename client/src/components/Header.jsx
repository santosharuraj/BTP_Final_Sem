import {
	Avatar,
	Button,
	Dialog,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Card,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CalculateIcon from "@mui/icons-material/Calculate";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
const Header = () => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const [userExist, setUserExist] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const open = Boolean(anchorEl);
	const user = JSON.parse(localStorage.getItem("User"));

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const ViewProfile = () => {
		setAnchorEl(null);
		// navigate(`/profile/${user._id}`);
		// navigate("/profile");
	};
	const LogoutHandler = () => {
		localStorage.clear();
		window.location.reload(false);
		// navigate("/auth");
	};

	const handleClickIcon = (value) => {
		if (value == "home") {
			navigate("/");
		} else if (value == "report") {
			navigate("/report");
		} else if (value == "find") {
			navigate("/findF&EI");
		} else if (value == "contact") {
			navigate("/contactUs");
		}
	};

	const handleLogin = () => {
		setOpenModal(true);
	};
	return (
		<>
			<AppBar>
				<Toolbar className="toolbar" style={{ height: "40px" }}>
					<div>
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/006/961/992/small/worker-safety-helmet-illustration-logo-free-vector.jpg"
							alt=""
						/>
						<span>Safety</span>
					</div>

					<div>
						<div className="icons" onClick={() => handleClickIcon("home")}>
							<HomeIcon style={{ color: "white" }} />
							<span>Home</span>
						</div>
						<div className="icons" onClick={() => handleClickIcon("find")}>
							<CalculateIcon style={{ color: "white" }} />
							<span>Evaluate</span>
						</div>
						{/* <div className="icons" onClick={() => handleClickIcon("report")}>
							<DoneAllIcon style={{ color: "white" }} />
							<span>Report</span>
						</div> */}
						<div className="icons" onClick={() => handleClickIcon("contact")}>
							<PermContactCalendarIcon style={{ color: "white" }} />
							<span>Contact</span>
						</div>
						<div className="icons" onClick={() => handleClickIcon("contact")}>
							<span>{user && user.email}</span>
						</div>
						<div className="icons">
							{user ? (
								<div>
									<Tooltip title={"santosh"}>
										<IconButton
											id="basic-button"
											aria-controls={open ? "basic-menu" : undefined}
											aria-haspopup="true"
											aria-expanded={open ? "true" : undefined}
											onClick={handleClick}
										>
											<Avatar
												id="basic-menu"
												alt="Remy Sharp"
												src="https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg"
											/>
										</IconButton>
									</Tooltip>
									<Menu
										id="basic-menu"
										anchorEl={anchorEl}
										open={open}
										onClose={ViewProfile}
										MenuListProps={{
											"aria-labelledby": "basic-button",
										}}
									>
										<MenuItem onClick={LogoutHandler}>Logout</MenuItem>
									</Menu>
								</div>
							) : (
								<Button
									onClick={() => handleLogin()}
									className="loginBtn"
									variant="outlined"
								>
									Login
								</Button>
							)}
						</div>
					</div>
				</Toolbar>
			</AppBar>

			<Dialog open={openModal} onClose={() => setOpenModal(false)}>
				<Card className="LoginModal">
					<Login />
				</Card>
			</Dialog>
		</>
	);
};

export default Header;
