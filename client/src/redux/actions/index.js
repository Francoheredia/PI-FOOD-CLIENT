import axios from 'axios';
import {
  CLEAN_DETAIL,
  FILTER_DIETS,
  GET_API_INFO_ALL,
  GET_DETAIL,
  GET_TYPES_DIETS,
  NAME_USER,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  SEARCH_BY_NAME,
  SELECT_DIETS,
} from './types';

// export const getRecipesAll = () => {
//   return async function (dispatch) {
//     const response = await axios.get('http://localhost:3001/recipes');
//     return dispatch({
//       type: GET_API_INFO_ALL,
//       payload: response.data,
//     });
//   };
// };

export const getRecipesAll = () => {
  return function (dispatch) {
    axios.get('/recipes').then((response) =>
      dispatch({
        type: GET_API_INFO_ALL,
        payload: response.data,
      })
    );
  };
};

export const searchbyName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`/recipes?name=${name}`);
    if (!response) {
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: [],
      });
    }
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: response.data,
    });
  };
};

// export const getDetail = (id) => {
//   return async function (dispatch) {
//     const response = await axios.get(`http://localhost:3001/recipes/${id}`);
//     return dispatch({
//       type: GET_DETAIL,
//       payload: response.data,
//     });
//   };
// };

export const getDetail = (id) => {
  return function (dispatch) {
    axios.get(`/recipes/${id}`).then((response) =>
      dispatch({
        type: GET_DETAIL,
        payload: response.data,
      })
    );
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const response = await axios.get(`/types`);
    return dispatch({
      type: GET_TYPES_DIETS,
      payload: response.data,
    });
  };
};

export const postRecipe = (payload) => {
  return async function (dispatch) {
    const response = await axios.post(`/recipe`, payload);
    return response;
  };
};

export const nameUser = (payload) => {
  return {
    type: NAME_USER,
    payload: payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload: payload,
  };
};

export const selecDiets = (payload) => {
  return {
    type: SELECT_DIETS,
    payload: payload,
  };
};

export const filterByDiets = (payload) => {
  return {
    type: FILTER_DIETS,
    payload,
  };
};

export const orderByScore = (payload) => {
  return {
    type: ORDER_BY_SCORE,
    payload: payload,
  };
};

export const getClean = () => {
  return {
    type: CLEAN_DETAIL,
  };
};
