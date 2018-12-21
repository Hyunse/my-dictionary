import axios from 'axios';
import server from '../config/server';
import {
  API_ERROR,
  API_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SAVE_VALUE
} from './types';

/**
 * Search Word
 * @param {string} searchValue
 * @desc call merriam webster dictionary api
 */
export const searchWords = (searchValue: string) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchValue}?key=${
        process.env.REACT_APP_DICTIONARY_KEY
      }`
    );

    // Dispatch : SearchList
    dispatch({
      payload: response.data,
      type: API_SUCCESS
    });

    // Dispatch : SearchValue
    dispatch({
      payload: searchValue,
      type: SAVE_VALUE
    });
  } catch (err) {
    dispatch({
      payload: 'API Call Error',
      type: API_ERROR
    });
  }
};

export const signIn = (email: string, password: string, callback: ()=> void) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://${server.dev.url}:${server.dev.port}/user/signIn`,
      {
        email,
        password
      }
    );

    dispatch({
      payload: response.data.token,
      type: LOGIN_SUCCESS
    });
    
    // Set JWT
    localStorage.setItem('token', response.data.token);

    callback();
  } catch (err) {
    dispatch({
      payload: 'Login Fail',
      type: LOGIN_FAIL
    });
  }
};
