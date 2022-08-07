import "./styles/sass/styles.scss";
import "./App.css";
import { useState, useEffect } from "react";
import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import UserInputs from "./components/UserInputs.js";
import Dashboard from "./components/Dashboard.js";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<div className="m-4">
									<h1 className="display-1">RISE</h1>
								</div>

								<div className="container mb-4">
									<div className="row">
										<div className="col-sm p-4">
											<p>
												{" "}
												RISE is the most secure messaging app in the market.
												Based on Web 3.0 peer to peer protocols. RISE has no
												central server to compromise, and it also obfuscates
												metadata, so no third party can ascertain who is
												corresponding with who.
											</p>
										</div>
										<div className="col-sm p-4">
											<p>
												RISE will include an open, censorship resistant,
												decentralized marketplace. We will not list our token on
												any other exchanges. This is because we want our token
												traded for goods and services rather than being traded
												by speculators.
											</p>
										</div>
										<div className="col-sm p-4">
											<p>
												We are also in the process of developing a
												cryptocurrency based Universal Basic Income, and open
												marketplace, in an attempt to create a stable borderless
												economy without out capital gatekeepers.
											</p>
										</div>
									</div>
								</div>
								{/* If the user is a returning user they should be asked to sign in with their wallet pin, then be redirected to the dashboard
                - The buttons shouldn't span the entire viwport width.
                */}
								<div className="mb-3 mt-4">
									<Button className="bg-dark p-3">
										<Link to="/UserInputs" className="text-white">
											REGISTER YOUR ACCOUNT
										</Link>
									</Button>
								</div>

								<Button className="bg-dark p-3 mt-4">
									<Link to="/Dashboard" className="text-white">
										Dashboard
									</Link>
								</Button>
							</>
						}
					/>

					<Route path="/UserInputs" element={<UserInputs />} />
					<Route path="/Dashboard/*" element={<Dashboard />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
