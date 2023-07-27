import rootReducer from "../Reducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore,compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose ;
const Store = createStore (rootReducer , composeEnhancer(applyMiddleware(thunk)))


export default Store ;