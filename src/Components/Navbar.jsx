import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Views/Home";
import AirQuality from "../Views/AirQuality";
import Safety from "../Views/Safety";
import WasteManagement from "../Views/WasteManagement";
import WaterQuality from "../Views/WaterQuality";
import Attendance from "../Views/Attendance";
import "../Views/Stylesheet.css";
import Rlogo from "../Assets/Rudramlogo-without-text.svg";

import {
	Home as HomeIcon,
	Wind,
	Shield,
	Droplet,
	Trash2,
	Aperture,
	Truck,
	Map,
} from "react-feather";

function Navbar() {
	function NavPack({ to, icon, text }) {
		return (
			<div className="nav-links">
				<Link className="block" to={`${to}`}>
					<div className="flex row justify-between">
						<div className="flex row flex-align">
							<div className="lr-pad-5px white">{icon}</div>
							<h5 className="pad-20px font-14px white font-600">{text}</h5>
						</div>
						<div className="nav-highlight"></div>
					</div>
				</Link>
			</div>
		);
	}

	return (
		<Router>
			<div className="flex row">
				<nav>
					<ul
						style={{
							backgroundColor: "gray",
							height: "100%",
							background:
								"linear-gradient(0.93turn, rgb(103, 178, 111), rgb(0 136 204))",
							color: "white",
						}}
					>
						<li
							className="flex row flex-align"
							style={{ padding: "8px 0", backgroundColor: "#1a2c512e" }}
						>
							<object
								type="image/svg+xml"
								data={Rlogo}
								width="35"
								height="auto"
								style={{ margin: "10px" }}
							>
								Your browser does not support SVG.
							</object>
							<h2 style={{ fontWeight: "500" }}>RUDRAM</h2>
						</li>
						<li>
							<NavPack to="/" icon={<HomeIcon />} text="Home" />
						</li>
						<li>
							<NavPack to="/air-quality" icon={<Wind />} text="Air Quality" />
						</li>
						<li>
							<NavPack
								to="/water-quality"
								icon={<Droplet />}
								text="Water Quality"
							/>
						</li>
						<li>
							<NavPack
								to="/waste-management"
								icon={<Trash2 />}
								text="Waste Management"
							/>
						</li>
						<li>
							<NavPack
								to="/safety-security"
								icon={<Shield />}
								text="Safety and Security"
							/>
						</li>
						<li>
							<NavPack
								to="/attendance"
								icon={<Aperture />}
								text="Attendance & Access"
							/>
						</li>
						<li>
							<NavPack to="/fleet" icon={<Truck />} text="Fleet Management" />
						</li>
						<li>
							<NavPack to="/map" icon={<Map />} text="Map Views" />
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/air-quality">
						<AirQuality />
					</Route>
					<Route path="/safety-security">
						<Safety />
					</Route>
					<Route path="/water-quality">
						<WaterQuality />
					</Route>
					<Route path="/waste-management">
						<WasteManagement />
					</Route>
					<Route path="/attendance">
						<Attendance />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default Navbar;
