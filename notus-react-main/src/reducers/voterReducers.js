import {
  VOTER_LIST_REQUEST,
  VOTER_LIST_SUCCESS,
  VOTER_LIST_FAIL,
  VOTER_POST_REQUEST,
  VOTER_POST_SUCCESS,
  VOTER_POST_FAIL,
} from "../constants/userConstants";

export const voterListReducer = (state = { voters: [] }, action) => {
  switch (action.type) {
    case VOTER_LIST_REQUEST:
      return { loading: true, voters: [] };
    case VOTER_LIST_SUCCESS:
      return {
        loading: false,
        voters: action.payload.data,
      };
    case VOTER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const voterPostReducer = (state = {}, action) => {
  switch (action.type) {
    case VOTER_POST_REQUEST:
      return { loading: true };
    case VOTER_POST_SUCCESS:
      return { loading: false, success: true, voters: action.payload };
    case VOTER_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
