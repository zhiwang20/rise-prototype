import { Routes, Route, Link } from "react-router-dom";
import CardObject from "../Card/CardObject";
import { useNavigate } from "react-router-dom";
import nirvana from "../../styles/assets/nirvana.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	Button,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faMagnifyingGlass,
	faPlus
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";
import prod2 from "../../styles/assets/minicooper.jpeg";
import prod3 from "../../styles/assets/ps5.jpeg";
import ProductDetails from "./ProductDetails";

import "./MarketPlaceInputs.css";
import "bootstrap/dist/css/bootstrap.css";
import MarketPlacePostProduct from "./MarketPlacePostProduct";
import CheckSellerInfo from "./CheckSellerInfo";

// const data = [
// 	{
// 		Id: 1,
// 		perName: "Eric Smith",
// 		perPic: img1,
// 		prodName: "Apple Watch",
// 		Category: "electronics",
// 		Price: 450,
// 		Detail: "this is a apple watch",
// 		prodPic: prod1,
// 		Good: 14,
// 		Bad: 2,
// 		Date: "2022-05-25"
// 	},
// 	{
// 		Id: 2,
// 		perName: "Eric Smith",
// 		perPic: img1,
// 		prodName: "MINI cooper",
// 		Category: "vehicles",
// 		Price: 1000,
// 		Detail: "this is a car",
// 		prodPic: prod2,
// 		Good: 14,
// 		Bad: 2,
// 		Date: "2022-05-22"
// 	},
// 	{
// 		Id: 3,
// 		perName: "Eric Smith",
// 		perPic: img1,
// 		prodName: "PS5",
// 		Category: "entertainment",
// 		Price: 200,
// 		Detail: "this is a PS station",
// 		prodPic: prod3,
// 		Good: 14,
// 		Bad: 2,
// 		Date: "2021-05-27"
// 	}
// ];

const MarketPlaceInputs = () => {
	const data = useSelector((state) => state.marketItem.marketItems);
	const [postProduct, setPostProduct] = useState(false);
	const [checkSellerInfo, setCheckSellerInfo] = useState(false);
	const [sellerName, setSellerName] = useState("");
	const [sellerPic, setSellerPic] = useState("");

	const addProductHandler = (newItem) => {
		data.push(newItem);
		setPostProduct(false);
	};

	const closeAddProduct = () => {
		setPostProduct(false);
	};

	const closeCheckSellerHandler = () => {
		setCheckSellerInfo(false);
	};

	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("all");
	const [filter, setFilter] = useState(null);
	const [thumbsup, setThumbsup] = useState();

	const searchByName = (data) => {
		return data.filter((item) => item.prodName.toLowerCase().includes(query));
	};

	const searchCate = (data) => {
		return data.filter((item) => {
			if (category === "all") {
				return item;
			} else {
				return item.Category === category;
			}
		});
	};

	const searchSortBy = (data) => {
		if (filter === "priceLowToHigh") {
			data = [...data].sort((a, b) =>
				a.Price > b.Price ? 1 : a.Price < b.Price ? -1 : 0
			);
		} else if (filter === "priceHighToLow") {
			data = [...data].sort((a, b) =>
				a.Price > b.Price ? -1 : a.Price < b.Price ? 1 : 0
			);
		} else if (filter === "Newest") {
			data = [...data].sort((a, b) =>
				a.Date > b.Date ? -1 : b.Date < a.Date ? 1 : 0
			);
		}
		return data;
	};

	const finaldata = searchSortBy(searchByName(searchCate(data)));
	// console.log(finaldata);

	// const addThumbsUp

	return (
		<div className="marketPlace">
			<Routes>
				<Route
					path="/"
					element={
						<div className="d-flex">
							<Col md={3} className="border-end">
								<div className="search">
									<input
										type="text"
										placeholder="search"
										onChange={(e) => setQuery(e.target.value)}
									/>
									<FontAwesomeIcon
										className="search-icon"
										icon={faMagnifyingGlass}
										size="1x"
										transform="left-20"
									/>
								</div>

								<button
									className="add-deal-button"
									onClick={() => {
										setPostProduct(true);
									}}>
									<FontAwesomeIcon
										className="plus-icon"
										icon={faPlus}
										size="1x"
										transform="left-15"
									/>
									Add Your Deal
								</button>

								<div className="border-top"></div>
								<div className="filter-sort-title"> Filter </div>
								<select
									className="filter_sort"
									onChange={(e) => setFilter(e.target.value)}>
									<option>Sort by</option>
									<option value="priceLowToHigh">Price: Low to High</option>
									<option value="priceHighToLow">Price: High to Low</option>
									<option value="Newest">Newest</option>
								</select>

								<div className="border-top"></div>
								<div className="filter-sort-title"> Category </div>

								<select
									className="filter_category"
									onChange={(e) => setCategory(e.target.value)}>
									<option value="all">All Categories</option>
									<option value="vehicles">Vehicles</option>
									<option value="property-rental">Property Rental</option>
									<option value="apparel">Apparel</option>
									<option value="classifieds">Classifieds</option>
									<option value="electronics">Electronics</option>
									<option value="entertainment">Entertainment</option>
									<option value="family">Family</option>
									<option value="free stuff">Free Stuff</option>
									<option value="garden/outdoors">Garden & Outdoors</option>
									<option value="other">Other</option>
								</select>
							</Col>

							{postProduct && (
								<MarketPlacePostProduct
									addItem={addProductHandler}
									closeAddProduct={closeAddProduct}
								/>
							)}
							<Col md={9}>
								<CardObject param={finaldata} />
							</Col>
						</div>
					}
				/>
				<Route path="detail/:Id" element={<ProductDetails />} />
			</Routes>
		</div>
	);
};

export default MarketPlaceInputs;
