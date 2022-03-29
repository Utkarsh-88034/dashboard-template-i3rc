import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import { userListReducer } from "./reducers/userReducers";
import { voterListReducer } from "reducers/voterReducers";
import { voterPostReducer } from "reducers/voterReducers";
import { electionListReducer } from "reducers/voterReducers";
import { electionDataByIDReducer } from "reducers/voterReducers";
import { voterDataByIDReducer } from "reducers/voterReducers";
import { voterListReducerLkn } from "reducers/voterReducers";
import { electionListReducerLkn } from "reducers/voterReducers";
import { electionListReducerVdn } from "reducers/voterReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  voterListLkn: voterListReducerLkn,
  voterList: voterListReducer,
  statusList: voterPostReducer,
  electionList: electionListReducer,
  electionListbyID: electionDataByIDReducer,
  voterById: voterDataByIDReducer,
  electionListLkn: electionListReducerLkn,
  electionListVdn: electionListReducerVdn,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
