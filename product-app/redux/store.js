import { applyMiddleware, legacy_createStore } from "redux";

const { reducer } = require("./reducer");

const rootReducer = {
    delete:reducer
}

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)))