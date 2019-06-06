import { createStore, combineReducers } from "redux";
import videoReducer from "./reducers/videoReducer";

let reducer = combineReducers({
  videos: videoReducer
});

let store = createStore(reducer);

store.subscribe(() => {
  console.log("Dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
