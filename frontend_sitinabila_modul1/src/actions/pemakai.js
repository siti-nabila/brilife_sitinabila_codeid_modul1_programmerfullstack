import { 
    EDIT_KONTRASEPSI_REQUEST, EDIT_KONTRASEPSI_SUCCESS, EDIT_KONTRASEPSI_FAILURE, 
    ADD_KONTRASEPSI_REQUEST, ADD_KONTRASEPSI_SUCCESS, ADD_KONTRASEPSI_FAILURE,
    DELETE_KONTRASEPSI_REQUEST, DELETE_KONTRASEPSI_SUCCESS, DELETE_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSI_REQUEST, FIND_KONTRASEPSI_SUCCESS, FIND_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSIS_REQUEST , FIND_KONTRASEPSIS_SUCCESS, FIND_KONTRASEPSIS_FAILURE
   } from "./constants"; 
   import { commonAxios } from '../utils/ApiUtils';
  
  const axios = require('axios');
  
  function sleep(delay, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay, value);
    }); 
  }
  
  export const editById = (id, nama) =>
    (dispatch) => {
      dispatch({
        type: EDIT_KONTRASEPSI_REQUEST
      });
  
      commonAxios.put(`kontrasepsi/${id}` ,{ nama } ,{
        header: {
          'Content-type': 'application/json'
        }
      })
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(editKontrasepsiSuccess(data));
      })
      .catch(error => {
        dispatch(editKontrasepsiError(error));
      });
  }
  
  export const addKontrasepsi = (nama) =>
    (dispatch) => {
      dispatch({
        type: ADD_KONTRASEPSI_REQUEST
      });
      commonAxios.post('/kontrasepsi', { nama }, {
        header: {
          'Content-Type' : 'application/json' 
        }
      })
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(addKontrasepsiSuccess(data));
      })
      .catch(error => {
        console.log(error)
        dispatch(addKontrasepsiError(error));
      });
  }
  
  export const deleteById = (id) =>
    (dispatch) => {
      dispatch({
        type: DELETE_KONTRASEPSI_REQUEST
      });
  
      commonAxios.delete(`kontrasepsi/${id}`)
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(deleteKontrasepsiSuccess(data));
      })
      .catch(error => {
        dispatch(deleteKontrasepsiError(error));
      });
  }
  
  export const findById = (id) =>
    (dispatch) => {
      dispatch({
        type: FIND_KONTRASEPSI_REQUEST
      });
  
      commonAxios.get(`kontrasepsi/${id}`)
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(findKontrasepsiSuccess(data));
      })
      .catch(error => {
        dispatch(findKontrasepsiError(error));
      });
  }
  
  export const findAll = ({search} = {}) => 
    (dispatch) => {
      dispatch({
        type: FIND_KONTRASEPSIS_REQUEST
      });
      commonAxios.get('kontrasepsis', {
        params: {
          ...search
        }
      })
        .then(data => sleep(3000,data))
        .then(data => {
          dispatch(findKontrasepsisSuccess(data));
        })
        .catch(error => {
          dispatch(findKontrasepsisError(error));
        });
    };
  
  function editKontrasepsiSuccess(data) {
    return{
      type: EDIT_KONTRASEPSI_SUCCESS,
      data: data
    };
  
  }
  
  function editKontrasepsiError(error) {
    return{
      type: EDIT_KONTRASEPSI_FAILURE,
      error: error
    };
  
  }
    
  function addKontrasepsiSuccess(data) {
    return{
      type: ADD_KONTRASEPSI_SUCCESS,
      data: data
    };
  
  }
  
  function addKontrasepsiError(error) {
    return{
      type: ADD_KONTRASEPSI_FAILURE,
      error: error
    };
  
  }
  
  function deleteKontrasepsiSuccess(data) {
    return{
      type: DELETE_KONTRASEPSI_SUCCESS,
      data: data
    };
  
  }
  
  function deleteKontrasepsiError(error) {
    return{
      type: DELETE_KONTRASEPSI_FAILURE,
      error: error
    };
  
  }
  
  function findKontrasepsiSuccess(data) {
    return{
      type: FIND_KONTRASEPSI_SUCCESS,
      data: data
    };
  }
  function findKontrasepsiError(error) {
    return{
      type: FIND_KONTRASEPSI_FAILURE,
      error: error
    };
  }
  function findKontrasepsisSuccess(data) {
    return{
      type: FIND_KONTRASEPSIS_SUCCESS,
      data: data
    };
  }
  function findKontrasepsisError(error) {
    return{
      type: FIND_KONTRASEPSIS_FAILURE,
      error: error
    };
  }
      