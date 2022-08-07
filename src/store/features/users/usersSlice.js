import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../../styles/assets/img/jessie.png";

const usersSlice = createSlice({
	name: "users",
	initialState: {
		users: [
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
			},
		]
	},
	reducers: {}
});

export const { } = usersSlice.actions;

export default usersSlice;
