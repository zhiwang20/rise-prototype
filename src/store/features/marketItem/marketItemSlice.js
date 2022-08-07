import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../../styles/assets/img/jessie.png";
import prod1 from "../../../styles/assets/appwatch.jpg";
import prod2 from "../../../styles/assets/minicooper.jpeg";
import prod3 from "../../../styles/assets/ps5.jpeg";
const marketItemSlice = createSlice({
	name: "marketItem",
	initialState: {
		marketItems: [
			{
				Id: 1,
				perName: "Eric Smith",
				perPic: img1,
				prodName: "Apple Watch",
				Category: "electronics",
				Price: 450,
				Detail: "this is a apple watch",
				prodPic: prod1,
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
				perName: "Sam Smith",
				perPic: img1,
				prodName: "PS5",
				Category: "entertainment",
				Price: 200,
				Detail: "this is a PS station",
				prodPic: prod3,
				Good: 14,
				Bad: 2,
				Date: "2021-05-27"
			},
		]
	},
	reducers: {
		incrementGood: (state, { payload }) => {
			state.marketItems.forEach((item) => {
				if (item.Id === payload.Id) {
					item.Good += 1;
				}
			});
		},
		incrementBad: (state, { payload }) => {
			state.marketItems.forEach((item) => {
				if (item.Id === payload.Id) {
					item.Bad += 1;
				}
			});
		},
		addItem: (state, { payload }) => {
			state.marketItems.push(payload);
		}
	}
});

export const { incrementGood, incrementBad, addItem } = marketItemSlice.actions;

export default marketItemSlice;
