import { configureStore, combineReducers } from "@reduxjs/toolkit";

import testReducer from "./test.reducer";

const reducer = combineReducers({
    test: testReducer,
});

const store = configureStore({
    reducer,
});

export default store;