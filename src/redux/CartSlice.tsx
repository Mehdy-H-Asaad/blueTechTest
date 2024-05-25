import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productsProps, productsPropsActions } from "../../types/Products";

type initialStateProps = {
	cart: productsProps[];
};

const initialState: initialStateProps = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<productsProps>) => {
			if (state.cart.find(ele => ele.id == action.payload.id) == null) {
				state.cart.push({
					...action.payload,
					quantity: action.payload.quantity,
				});
			}
		},
		removeFromCart: (state, action: PayloadAction<productsProps>) => {
			state.cart = state.cart.filter(ele => ele.id != action.payload.id);
		},
		updateItemQuantity: (
			state,
			action: PayloadAction<productsPropsActions>
		) => {
			const selectedItem = state.cart.find(ele => ele.id == action.payload.id);

			if (selectedItem) {
				selectedItem.quantity = action.payload.quantity;
			}
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, updateItemQuantity } =
	cartSlice.actions;
