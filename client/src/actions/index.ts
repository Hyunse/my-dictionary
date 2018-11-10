import axios from 'axios';
import { API_ERROR, API_SUCCESS } from './types';

export const searchWords = (searchValue) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchValue}?key=${
        process.env.REACT_APP_DICTIONARY_KEY
      }`
    );
    // tslint:disable-next-line
    console.log(response.data);

    dispatch({
      payload: response.data,
      type: API_SUCCESS
    });
  } catch (err) {
    dispatch({
      payload: 'API Call Error',
      type: API_ERROR
    });
  }
};
