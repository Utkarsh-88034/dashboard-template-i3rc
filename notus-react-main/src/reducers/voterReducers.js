import {
    VOTER_LIST_REQUEST,
    VOTER_LIST_SUCCESS,
    VOTER_LIST_FAIL,
} from '../constants/userConstants';

export const voterListReducer = (state = { voters: [] }, action) => {
  switch (action.type) {
    case VOTER_LIST_REQUEST:
      return { loading: true, voters: [] }
    case VOTER_LIST_SUCCESS:
      return {
        loading: false,
        voters: action.payload.voters,
      }
    case VOTER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}