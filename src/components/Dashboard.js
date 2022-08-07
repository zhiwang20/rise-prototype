import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import MarketPlaceInputs from "./marketplace/MarketPlaceInputs";
import Nirvana from "./wallet/Nirvana";
import Home from "./home/Home";
import Matching from "./Matching/Matching";
import Matched from "./Matching/Matched";
import nirvana from "../styles/assets/nirvana.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./contact/Contact";
import Me from "./Me/Me.js";

import { Container, Row, Col } from "reactstrap";
import {
	faHouse,
	faCreditCard,
	faUser,
	faUserGroup,
	faCartShopping
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
	return (
		<Row className="dashboard container-xl px-0 mx-0">
			<Col className="col-2 border-end px-0">
				<nav className="menu">
					<ul className="ms-0 ps-0">
						<li>
							<Link to="Home/">
								<FontAwesomeIcon className="icon" icon={faHouse} />
								Home
							</Link>
						</li>
						<li>
							<Link to="MarketPlace/">
								<FontAwesomeIcon className="icon" icon={faCartShopping} />
								Free Market
							</Link>
							<ul>
								<li>{/* <h3>Something</h3> */}</li>
								<li></li>
							</ul>
						</li>
						<li>
							<Link to="contact">
								<FontAwesomeIcon className="icon" icon={faUserGroup} />
								Contact
							</Link>
						</li>

						<li>
							<Link to="nirvana/">
								<img src={nirvana} alt="" />
								Nirvana
							</Link>
							<ul>
								<li></li>
								<li></li>
							</ul>
						</li>
						<li>
							<Link to="me/">
								<FontAwesomeIcon className="icon" icon={faUser} />
								Me
							</Link>
						</li>
						<li>
							<Link to="/">Log Out</Link>
						</li>
					</ul>
				</nav>
			</Col>
			<Col className="col-10 mx-0 px-0">
				<Routes>
					<Route
						path="Home/*"
						exact
						element={
							<div>
								<h1>Home</h1>
								<Home />
							</div>
						}
					/>

					<Route
						path="contact/*"
						exact
						element={
							<div>
								<Contact />
							</div>
						}
					/>
					<Route
						path="MarketPlace/*"
						element={
							<div>
								<p>Free Market</p>
								<MarketPlaceInputs />
							</div>
						}
					/>
					<Route
						path="MarketPlace/*"
						element={
							<div>
								<h1>Free Market</h1>
								<MarketPlaceInputs />
							</div>
						}
					/>

					<Route
						path="Nirvana/*"
						element={
							<div>
								<h1>Nirvana</h1>
								<Nirvana />
							</div>
						}
					/>
					<Route
						path="me/*"
						exact
						element={
							<div>
								<Me />
							</div>
						}
					/>
					<Route
						path="Matching/*"
						element={
							<div>
								<Matching />
							</div>
						}
					/>
					<Route
						path="Matched/*"
						element={
							<div>
								<Matched />
							</div>
						}
					/>
				</Routes>
			</Col>
		</Row>
	);
};

export default Dashboard;
