import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { Button } from "reactstrap";
import personMe from "../../styles/assets/personMe.jpg";
import person2 from "../../styles/assets/person2.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Input, Form } from "reactstrap";

const Matched = () => {
	const [counter, setCounter] = React.useState(3600);
	const navigate = useNavigate();

	React.useEffect(() => {
		const timer =
			counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	useEffect(() => {
		setTimeout(() => {
			navigate("../Home");
		}, 3600000);
	}, []);

	return (
		<div className="matchedContainer">
			<div className="leftWrapper">
				<h1>Start to Connect</h1>
				<div className="head">
					<hr className="solid" style={{ width: "700px" }}></hr>
					<p className="text-secondary" style={{ textAlign: "right" }}>
						Remaining Time: {Math.floor(counter / 360)} Min
					</p>
				</div>
				<div className="matchedCanvas">
					<img src={person2} alt="personMe" className="overlaymatched" />
					<img
						src={personMe}
						alt="person2"
						width={"250px"}
						height={"175px"}
						className="meIcon"
					/>
				</div>

				<div className="buttons">
					<Button className="bg-white p-3 mt-4 mb-4 authenticateBtn">
						<Link to="/Dashboard/Home" className="text-black fw-bold">
							The User Is Authentic
						</Link>
					</Button>

					<Button className="bg-white p-3 mt-4 mb-4">
						<Link to="/Dashboard/Home" className="text-black fw-bold">
							The User Is Not Authentic
						</Link>
					</Button>
				</div>
			</div>

			<div className="rightWrapper">
				<h1>Message</h1>
				<Form>
					<Input id="exampleText" name="text" type="textarea" />
				</Form>
			</div>
		</div>
	);
};
export default Matched;
