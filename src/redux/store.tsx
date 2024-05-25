import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	cartItems: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
