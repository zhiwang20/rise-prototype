import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	Button,
	Row,
	Col,
	Carousel,
	CarouselIndicators,
	CarouselItem,
	CarouselCaption,
	CarouselControl,
	CardText,
	CardBody,
	ButtonGroup
} from "reactstrap";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faBookmark,
	faShare,
	faEllipsisVertical,
	faCircleXmark,
	faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import "./MarketPlaceInputs.css";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";
import prod2 from "../../styles/assets/minicooper.jpeg";
import prod3 from "../../styles/assets/ps5.jpeg";

const data = [
	{
		Id: 1,
		perName: "Eric Smith",
		perPic: img1,
		prodName: "Apple Watch",
		Category: "electronics",
		Price: 450,
		Detail:
			"This is a brand new apple Watch. I used it onece, but then found I do not  need it. I is in very good condition",
		prodPic: [
			{
				src: prod1
			},
			{
				src: prod2
			}
		],
		Good: 14,
		Bad: 2,
		Date: "2022-05-25"
	},
	{
		Id: 2,
		perName: "Eric Smith",
		perPic: img1,
		prodName: "MINI cooper",
		Category: "vehicles",
		Price: 1000,
		Detail: "this is a car",
		prodPic: prod2,
		Good: 14,
		Bad: 2,
		Date: "2022-05-22"
	},
	{
		Id: 3,
		perName: "Eric Smith",
		perPic: img1,
		prodName: "PS5",
		Category: "entertainment",
		Price: 200,
		Detail: "this is a PS station",
		prodPic: prod3,
		Good: 14,
		Bad: 2,
		Date: "2021-05-27"
	}
];

const ProductDetails = () => {
	// State for Active index
	const [activeIndex, setActiveIndex] = useState(0);

	// State for Animation
	const [animating, setAnimating] = useState(false);

	const para = useParams();
	const navigate = useNavigate();
	console.log(para.Id);

	const good = (data) => {
		return data.filter((item) => {
			return item.Id == para.Id;
		});
	};

	const finaldata = good(data);

	// Sample items for Carousel
	// const items = [
	//     {
	//         src: prod1,
	//         altText: 'Slide One'
	//     }
	// ];

	//check if it is not an array, change it to array first.
	const items =
		Array.isArray(finaldata[0].prodPic) === false
			? [{ src: finaldata[0].prodPic }]
			: finaldata[0].prodPic;

	// Items array length
	const itemLength = items.length - 1;

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	//have to use map
	const carouselItemData = items.map((item) => {
		return (
			<CarouselItem
				key={item.src}
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}>
				<div
					className="background"
					style={{ backgroundImage: `url(${item.src})` }}></div>
				<div>
					<div className="return-button">
						<FontAwesomeIcon
							className="return-button-close"
							icon={faCircleXmark}
							onClick={() => navigate(-1)}
							size="2x"
						/>
					</div>
					<div className="photo">
						<img src={item.src} width="135%" />
					</div>
				</div>
			</CarouselItem>
		);
	});

	return (
		<div className="d-flex">
			{finaldata.map((item) => (
				<div className="d-flex">
					<Col md={4}>
						<div className="product-detail-container">
							<div className="button-group">
								<ButtonGroup>
									<Button size="sm">
										<FontAwesomeIcon icon={faBookmark} />
									</Button>
									<Button size="sm">
										<FontAwesomeIcon icon={faShare} />
									</Button>
									<Button size="sm">
										<FontAwesomeIcon icon={faEllipsisVertical} />
									</Button>
								</ButtonGroup>
							</div>

							<div className="product-detail-title">{item.prodName}</div>
							<div className="product-detail-price">$ {item.Price}</div>
							<div>
								<Row className="product-detail-person">
									<Col md={3} sm={3} className="product-detail-PerPic">
										<img src={item.perPic} width="100%"></img>
									</Col>
									<Col md={5} sm={5} className="product-detail-PerName">
										&nbsp; {item.perName}
									</Col>
									<Col md={1}>
										<FontAwesomeIcon
											className="product-detail-thumb"
											icon={faThumbsUp}
											size="1x"
										/>
									</Col>
									<Col md={1}>
										<div className="thumb-count">{item.Good}</div>
									</Col>
									<Col md={1}>
										<FontAwesomeIcon
											className="product-detail-thumb"
											icon={faThumbsDown}
											size="1x"
										/>
									</Col>
									<Col md={1}>
										<div className="thumb-count">{item.Bad}</div>
									</Col>
								</Row>
							</div>
							<div className="product-detail-Detail">Detail</div>
							<div className="product-detail-info">{item.Detail}</div>
							<Button className="message-seller">
								<FontAwesomeIcon icon={faCommentDots} size="1x" />
								&nbsp; Message Seller
							</Button>
						</div>
					</Col>

					<Col md={8} style={{ marginLeft: "40px" }}>
						<div>
							<Carousel
								className="carousel-container"
								previous={previousButton}
								next={nextButton}
								activeIndex={activeIndex}>
								<CarouselIndicators
									items={items}
									activeIndex={activeIndex}
									onClickHandler={(newIndex) => {
										if (animating) return;
										setActiveIndex(newIndex);
									}}
								/>
								{carouselItemData}
								<CarouselControl
									directionText="Prev"
									direction="prev"
									onClickHandler={previousButton}
								/>
								<CarouselControl
									directionText="Next"
									direction="next"
									onClickHandler={nextButton}
								/>
							</Carousel>
						</div>
					</Col>
				</div>
			))}
		</div>
	);
};

export default ProductDetails;
