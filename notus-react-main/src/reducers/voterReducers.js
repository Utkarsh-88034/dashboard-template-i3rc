import {
  VOTER_LIST_REQUEST,
  VOTER_LIST_SUCCESS,
  VOTER_LIST_FAIL,
  VOTER_POST_REQUEST,
  VOTER_POST_SUCCESS,
  VOTER_POST_FAIL,
  VOTER_YEARLY_REQUEST,
  VOTER_YEARLY_SUCCESS,
  VOTER_YEARLY_FAIL,
  VOTER_ALL_ELECTION_REQUEST,
  VOTER_ALL_ELECTION_SUCCESS,
  VOTER_ALL_ELECTION_FAIL,
  VOTER_BY_ID_ELECTION_REQUEST,
  VOTER_BY_ID_ELECTION_SUCCESS,
  VOTER_BY_ID_ELECTION_FAIL,
  VOTER_BY_ID_REQUEST,
  VOTER_BY_ID_SUCCESS,
  VOTER_BY_ID_FAIL,
  VOTER_PUT_BY_ID_ELECTION_REQUEST,
  VOTER_PUT_BY_ID_ELECTION_SUCCESS,
  VOTER_PUT_BY_ID_ELECTION_FAIL,
  VOTER_LIST_REQUEST_LKN,
  VOTER_LIST_SUCCESS_LKN,
  VOTER_LIST_FAIL_LKN,
  VOTER_ALL_ELECTION_REQUEST_LKN,
  VOTER_ALL_ELECTION_SUCCESS_LKN,
  VOTER_ALL_ELECTION_FAIL_LKN,
  VOTER_ALL_ELECTION_REQUEST_VDN,
  VOTER_ALL_ELECTION_SUCCESS_VDN,
  VOTER_ALL_ELECTION_FAIL_VDN,
  VOTER_LIST_REQUEST_VDN,
  VOTER_LIST_SUCCESS_VDN,
  VOTER_LIST_FAIL_VDN,
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

export const voterListReducerLkn = (state = { votersLkn: [] }, action) => {
  switch (action.type) {
    case VOTER_LIST_REQUEST_LKN:
      return { loading: true, voters: [] };
    case VOTER_LIST_SUCCESS_LKN:
      return {
        loading: false,
        votersLkn: action.payload,
      };
    case VOTER_LIST_FAIL_LKN:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const voterListReducerVdn = (state = { votersVdn: [] }, action) => {
  switch (action.type) {
    case VOTER_LIST_REQUEST_VDN:
      return { loading: true, voters: [] };
    case VOTER_LIST_SUCCESS_VDN:
      return {
        loading: false,
        votersVdn: action.payload,
      };
    case VOTER_LIST_FAIL_VDN:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const voterPostReducer = (state = { status: {} }, action) => {
  switch (action.type) {
    case VOTER_POST_REQUEST:
      return { loading: true, status: {} };
    case VOTER_POST_SUCCESS:
      return { loading: false, status: action.payload.data };
    case VOTER_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const voterPostYearlyReducer = (state = {}, action) => {
  switch (action.type) {
    case VOTER_YEARLY_REQUEST:
      return { loading: true };
    case VOTER_YEARLY_SUCCESS:
      return { loading: false, success: true, voters: action.payload };
    case VOTER_YEARLY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const electionListReducer = (state = { edl: [] }, action) => {
  switch (action.type) {
    case VOTER_ALL_ELECTION_REQUEST:
      return { ...state, loading: true };
    case VOTER_ALL_ELECTION_SUCCESS:
      return {
        loading: false,
        edl: action.payload.data,
      };
    case VOTER_ALL_ELECTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const electionListReducerLkn = (state = { edlLkn: [] }, action) => {
  switch (action.type) {
    case VOTER_ALL_ELECTION_REQUEST_LKN:
      return { ...state, loading: true };
    case VOTER_ALL_ELECTION_SUCCESS_LKN:
      return {
        loading: false,
        edlLkn: action.payload,
      };
    case VOTER_ALL_ELECTION_FAIL_LKN:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const electionListReducerVdn = (state = { edlVdn: [] }, action) => {
  switch (action.type) {
    case VOTER_ALL_ELECTION_REQUEST_VDN:
      return { ...state, loading: true };
    case VOTER_ALL_ELECTION_SUCCESS_VDN:
      return {
        loading: false,
        edlVdn: action.payload,
      };
    case VOTER_ALL_ELECTION_FAIL_VDN:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const electionDataByIDReducer = (state = { eds: [] }, action) => {
  switch (action.type) {
    case VOTER_BY_ID_ELECTION_REQUEST:
      return { loading: true, eds: [] };
    case VOTER_BY_ID_ELECTION_SUCCESS:
      return {
        loading: false,
        eds: action.payload.electionData,
      };
    case VOTER_BY_ID_ELECTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const electionDataByEIDReducer = (state = { eds: [] }, action) => {
  switch (action.type) {
    case VOTER_PUT_BY_ID_ELECTION_REQUEST:
      return { loading: true, eds: [] };
    case VOTER_PUT_BY_ID_ELECTION_SUCCESS:
      return {
        loading: false,
        eds: action.payload.electionData,
      };
    case VOTER_PUT_BY_ID_ELECTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const voterDataByIDReducer = (state = { voter: {} }, action) => {
  switch (action.type) {
    case VOTER_BY_ID_REQUEST:
      return { loading: true, voter: {} };
    case VOTER_BY_ID_SUCCESS:
      return {
        loading: false,
        voter: action.payload.data,
      };
    case VOTER_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
