import React from "react";
import classes from "./CheckSellerInfo.module.css";
import "bootstrap/dist/css/bootstrap.css";
import {
	Card,
	CardBody,
	CardText,
	CardImg,
	CardTitle,
	Row,
	Col,
	Button
} from "reactstrap";
import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";
import prod2 from "../../styles/assets/minicooper.jpeg";
import prod3 from "../../styles/assets/ps5.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import CardObject from "../Card/CardObject";

const Sellerdata = [
	{
		Id: 1,
		perName: "Eric Smith",
		perPic: img1,
		Intro: "I like everything about vehicle"
	},
	{
		Id: 2,
		perName: "Sam Smith",
		perPic: img1,
		Intro: "I like everything about vehicle"
	}
];

const CheckSellerInfo = (props) => {
	const data = useSelector((state) => state.marketItem.marketItems);
	const perData = data.filter(
		(person) => person.perName == props.checkSellerName
	);
	console.log(perData);
	console.log(
		data.filter((person) => person.perName == props.checkSellerName)[1].perPic
	);
	return (
		<div className={classes.backdrop} onClick={props.closeCheckSellerHandler}>
			<div className={classes.modal} onClick={(e) => e.stopPropagation()}>
				<div className="return-button">
					<FontAwesomeIcon
						className="return-button-close"
						icon={faCircleXmark}
						onClick={props.closeCheckSellerHandler}
						size="2x"
					/>
				</div>
				<img
					className={classes.seller}
					src={props.checkSellerPic}
					width="14%"></img>
				{/* {props.checkSellerName} */}
				<div className={classes.buttonGroup}>
					<Button>Follow</Button> <Button>View Profile</Button>{" "}
					<Button>Report</Button>
				</div>
				<div className="border-top"></div>
				<div className={classes.sellerTitle}>About</div>
				{Sellerdata.filter(
					(person) => person.perName == props.checkSellerName
				).map((item) => (
					<div className={classes.sellerAbout}>{item.Intro}</div>
				))}
				<div className="border-top" style={{ marginLeft: "5px" }}></div>
				<div className={classes.sellerTitle}>Listing</div>

				<div className={classes.prod_container}>
					<div class="container-fluid">
						<CardObject param={perData} />
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default CheckSellerInfo;
