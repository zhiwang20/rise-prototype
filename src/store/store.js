import { configureStore } from "@reduxjs/toolkit";
import marketItemSlice from "./features/marketItem/marketItemSlice";
import usersItemSlice from "./features/users/usersSlice";

export const store = configureStore({
	reducer: {
		marketItem: marketItemSlice.reducer,
		usersItem: usersItemSlice.reducer
	}
});
