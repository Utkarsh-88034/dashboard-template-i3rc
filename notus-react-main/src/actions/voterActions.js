import axios from 'axios';
import {
  VOTER_LIST_REQUEST,
  VOTER_LIST_SUCCESS,
  VOTER_LIST_FAIL,
  VOTER_POST_REQUEST,
  VOTER_POST_SUCCESS,
  VOTER_POST_FAIL,
} from '../constants/userConstants';

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

    const { data } = await axios.get('/api/voter/voterdata'); //add config

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
    console.log(config);

    const { data } = await axios.post('/api/voter/voterdata', voter, config);

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
