import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import person1 from "../../styles/assets/person1.jpg";
import person2 from "../../styles/assets/person2.jpg";
import person3 from "../../styles/assets/person3.jpg";
import person4 from "../../styles/assets/person4.jpg";
import person5 from "../../styles/assets/person5.jpg";
import person6 from "../../styles/assets/person6.jpg";
import person7 from "../../styles/assets/person7.jpg";

const Matching = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("../Matched");
		}, 10000);
	}, []);

	return (
		<div className="matchingWrapper">
			<div className="head">
				<h1>Start to Connect </h1>
				<hr className="solid" style={{ width: "800px" }}></hr>
			</div>
			<h1 className="matchingWord">
				<span className="Ma">Ma</span>
				<span className="tc">tc</span>
				<span className="hi">hi</span>
				<span className="ng">ng</span>
			</h1>
			<h1 className="matchiedPersonName textonAnimation">Daniel Jonson</h1>

			<div className="MatchingCanvas overlayCanvas">
				<img
					src={person1}
					alt="person1"
					width={"150px"}
					height={"150px"}
					className="pics1 pics"
				/>
				<img
					src={person4}
					alt="person4"
					width={"90px"}
					height={"90px"}
					className="pics4 pics"
				/>
				<img
					src={person6}
					alt="person6"
					width={"130px"}
					height={"130px"}
					className="pics6 pics"
				/>

				<img
					src={person3}
					alt="person3"
					width={"90rem"}
					height={"90rem"}
					className="pics3 pics"
				/>
				<img
					src={person2}
					alt="person2"
					width={"160px"}
					height={"160px"}
					className="pics2 pics"
				/>
				<img
					src={person5}
					alt="person5"
					width={"100px"}
					height={"100px"}
					className="pics5 pics"
				/>
				<img
					src={person7}
					alt="person7"
					width={"170px"}
					height={"170px"}
					className="pics7 pics"
				/>
				<img
					src={person2}
					alt="person2"
					width={"170px"}
					height={"170px"}
					className="picsSmallmatch pics"
				/>
			</div>
		</div>
	);
};
export default Matching;
