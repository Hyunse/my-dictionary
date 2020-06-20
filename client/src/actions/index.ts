import axios from 'axios';
import server from '../config/server';
import {
  API_ERROR,
  API_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SAVE_VALUE,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS
} from './types';

/**
 * Search Word
 * @param {string} searchValue
 * @param {function} callback
 * @desc call merriam webster dictionary api
 */
export const searchWords = (
  searchValue: string,
  callback: () => void
) => async (dispatch) => {
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

    callback();
  } catch (err) {
    dispatch({
      payload: 'API Call Error',
      type: API_ERROR
    });
  }
};

/**
 * Sign In
 * @param {string} email
 * @param {string} password
 * @param {function} callback
 * @desc Sigin In User
 */
export const signIn = (
  email: string,
  password: string,
  callback: () => void
) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://${server.production.url}/user/signIn`,
      {
        email,
        password
      }
    );

    dispatch({
      payload: response.data.token,
      type: LOGIN_SUCCESS
    });

    // Set Token
    localStorage.setItem('token', response.data.token);

    callback();
  } catch (err) {
    dispatch({
      payload: 'Email or Password Incorrect',
      type: LOGIN_FAIL
    });
  }
};

export const signOut = () => (dispatch) => {
  dispatch({
    payload: 'Logout',
    type: LOGOUT
  });

  // Init Token
  localStorage.setItem('token', '');
};

export const signUp = (
  name: string,
  password: string,
  email: string,
  country: string,
  callback: () => void
) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://${server.production.url}/user/signUp`,
      {
        country,
        email,
        name,
        password
      }
    );

    dispatch({
      payload: response.data.token,
      type: SIGN_UP_SUCCESS
    });

    // Set Token
    localStorage.setItem('token', response.data.token);

    callback();
  } catch (err) {
    dispatch({
      payload: 'Signup Fail',
      type: SIGN_UP_FAIL
    });
  }
};