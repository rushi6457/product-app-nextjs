"use strict";

var _redux = require("redux");

var _require = require("./reducer"),
    reducer = _require.reducer;

var rootReducer = {
  "delete": reducer
}; // const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)))