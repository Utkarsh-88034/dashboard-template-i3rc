import axios from "axios";
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
  VOTER_BY_ID_SUCCESS,
  VOTER_BY_ID_FAIL,
  VOTER_BY_ID_REQUEST,
  VOTER_PUT_BY_ID_ELECTION_REQUEST,
  VOTER_PUT_BY_ID_ELECTION_SUCCESS,
  VOTER_PUT_BY_ID_ELECTION_FAIL,
  VOTER_LIST_REQUEST_LKN,
  VOTER_LIST_SUCCESS_LKN,
  VOTER_LIST_FAIL_LKN,
  VOTER_ALL_ELECTION_REQUEST_LKN,
  VOTER_ALL_ELECTION_SUCCESS_LKN,
  VOTER_ALL_ELECTION_FAIL_LKN,
  VOTER_ALL_ELECTION_SUCCESS_VDN,
  VOTER_ALL_ELECTION_FAIL_VDN,
  VOTER_ALL_ELECTION_REQUEST_VDN,
  VOTER_LIST_REQUEST_VDN,
  VOTER_LIST_SUCCESS_VDN,
  VOTER_LIST_FAIL_VDN,
  VOTER_LIST_REQUEST_WDN,
  VOTER_LIST_SUCCESS_WDN,
  VOTER_LIST_FAIL_WDN,
} from "../constants/userConstants";

export const listVoters = () => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.AccessToken}`,
      },
    };

    const { data } = await axios.get("/api/voter/voterdata"); //add config

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

export const listVotersLkn = (lknAccess) => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_LIST_REQUEST_LKN });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.AccessToken}`,
      },
    };

    const { data } = await axios.get(`/api/voter/voterdatalkn?${lknAccess}`); //add config

    dispatch({
      type: VOTER_LIST_SUCCESS_LKN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_LIST_FAIL_LKN,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listVotersVdn = (vdnAccess) => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_LIST_REQUEST_VDN });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.AccessToken}`,
      },
    };

    const { data } = await axios.get(`/api/voter/voterdatavdn?${vdnAccess}`); //add config

    dispatch({
      type: VOTER_LIST_SUCCESS_VDN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_LIST_FAIL_VDN,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listVotersWdn = (wdnAccess) => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_LIST_REQUEST_WDN });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.AccessToken}`,
      },
    };

    const { data } = await axios.get(`/api/voter/voterdatawdn?${wdnAccess}`); //add config

    dispatch({
      type: VOTER_LIST_SUCCESS_WDN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_LIST_FAIL_WDN,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postVoterData = (voter) => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_POST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.AccessToken}`,
      },
    };

    const { data } = await axios.post("/api/voter/voterdata", voter, config);

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

export const postYearlyVoterData =
  (yearly, voterId) => async (dispatch, getState) => {
    try {
      dispatch({ type: VOTER_YEARLY_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.AccessToken}`,
        },
      };

      const { data } = await axios.post(
        `/api/election/electiondata/${voterId}`,
        yearly,
        config
      );

      dispatch({
        type: VOTER_YEARLY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VOTER_YEARLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAllElectionData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_ALL_ELECTION_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.AccessToken}`,
      },
    };

    // console.log(userInfo);
    const { data } = await axios.get("/api/election/electiondata"); //add config

    dispatch({
      type: VOTER_ALL_ELECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_ALL_ELECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllElectionDataLkn =
  (lknAccess) => async (dispatch, getState) => {
    try {
      dispatch({ type: VOTER_ALL_ELECTION_REQUEST_LKN });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.AccessToken}`,
        },
      };

      // console.log(userInfo);
      const { data } = await axios.get(
        `/api/election/electiondatalkn?${lknAccess}`
      ); //add config

      dispatch({
        type: VOTER_ALL_ELECTION_SUCCESS_LKN,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VOTER_ALL_ELECTION_FAIL_LKN,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAllElectionDataVdn =
  (vdnAccess) => async (dispatch, getState) => {
    try {
      dispatch({ type: VOTER_ALL_ELECTION_REQUEST_VDN });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.AccessToken}`,
        },
      };

      // console.log(userInfo);
      const { data } = await axios.get(
        `/api/election/electiondatavdn?${vdnAccess}`
      ); //add config

      dispatch({
        type: VOTER_ALL_ELECTION_SUCCESS_VDN,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VOTER_ALL_ELECTION_FAIL_VDN,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getElectionDatabyID = (edid) => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_BY_ID_ELECTION_REQUEST });

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.AccessToken}`,
    //   },
    // };

    const { data } = await axios.get(`/api/election/electiondata/${edid}`); //add config

    dispatch({
      type: VOTER_BY_ID_ELECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_BY_ID_ELECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getVoterDatabyID = (vid) => async (dispatch, getState) => {
  try {
    dispatch({ type: VOTER_BY_ID_REQUEST });

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.AccessToken}`,
    //   },
    // };

    const { data } = await axios.get(`/api/voter/voterdata/${vid}`); //add config

    dispatch({
      type: VOTER_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VOTER_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putElectionDataById =
  (yearly, eId) => async (dispatch, getState) => {
    try {
      dispatch({ type: VOTER_PUT_BY_ID_ELECTION_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.AccessToken}`,
        },
      };

      const { data } = await axios.put(
        `/api/election/electiondata/${eId}`,
        yearly,
        config
      );

      dispatch({
        type: VOTER_PUT_BY_ID_ELECTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VOTER_PUT_BY_ID_ELECTION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
