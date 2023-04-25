import { combineReducers } from "redux";
import { reducers } from "../features/CollaborationData";

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
