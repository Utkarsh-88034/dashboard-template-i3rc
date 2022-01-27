import axios from "axios";
import {
  VOTER_LIST_REQUEST,
  VOTER_LIST_SUCCESS,
  VOTER_LIST_FAIL,
  VOTER_POST_REQUEST,
  VOTER_POST_SUCCESS,
  VOTER_POST_FAIL,
} from "../constants/userConstants";

export const listVoters = () => async (dispatch) => {
  try {
    dispatch({ type: VOTER_LIST_REQUEST });

    const { data } = await axios.get("/api/voter/voterdata");

    dispatch({
      type: VOTER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postVoterData = (voter) => async (dispatch) => {
  try {
    dispatch({ type: VOTER_POST_REQUEST });

    const { data } = await axios.post("/api/voter/voterdata", voter);

    dispatch({
      type: VOTER_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
