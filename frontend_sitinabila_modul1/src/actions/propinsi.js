import { 
    EDIT_PROPINSI_REQUEST, EDIT_PROPINSI_SUCCESS, EDIT_PROPINSI_FAILURE, 
    ADD_PROPINSI_REQUEST, ADD_PROPINSI_SUCCESS, ADD_PROPINSI_FAILURE,
    DELETE_PROPINSI_REQUEST, DELETE_PROPINSI_SUCCESS, DELETE_PROPINSI_FAILURE,
    FIND_PROPINSI_REQUEST, FIND_PROPINSI_SUCCESS, FIND_PROPINSI_FAILURE,
    FIND_PROPINSIS_REQUEST , FIND_PROPINSIS_SUCCESS, FIND_PROPINSIS_FAILURE
   } from "./constants"; 
   import { commonAxios } from '../utils/apiUtils';
  
  const axios = require('axios');
  
  function sleep(delay, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay, value);
    }); 
  }
  
  export const editById = (id, nama) =>
    (dispatch) => {
      dispatch({
        type: EDIT_PROPINSI_REQUEST
      });
  
      commonAxios.put(`propinsi/${id}` ,{ nama } ,{
        header: {
          'Content-type': 'application/json'
        }
      })
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(editPropinsiSuccess(data));
      })
      .catch(error => {
        dispatch(editPropinsiError(error));
      });
  }
  
  export const addPropinsi = (nama) =>
    (dispatch) => {
      dispatch({
        type: ADD_PROPINSI_REQUEST
      });
      commonAxios.post('', { nama }, {
        header: {
          'Content-Type' : 'application/json' 
        }
      })
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(addPropinsiSuccess(data));
      })
      .catch(error => {
        console.log(error)
        dispatch(addPropinsiError(error));
      });
  }
  
  export const deleteById = (id) =>
    (dispatch) => {
      dispatch({
        type: DELETE_PROPINSI_REQUEST
      });
  
      commonAxios.delete(`propinsi/${id}`)
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(deletePropinsiSuccess(data));
      })
      .catch(error => {
        dispatch(deletePropinsiError(error));
      });
  }
  
  export const findById = (id) =>
    (dispatch) => {
      dispatch({
        type: FIND_PROPINSI_REQUEST
      });
  
      commonAxios.get(`propinsi/${id}`)
      .then(data => sleep(3000,data))
      .then(data => {
        dispatch(findPropinsiSuccess(data));
      })
      .catch(error => {
        dispatch(findPropinsiError(error));
      });
  }
  
  export const findAll = () => 
    (dispatch) => {
      dispatch({
        type: FIND_PROPINSIS_REQUEST
      });
      commonAxios.get('')
        .then(data => sleep(3000,data))
        .then(data => {
          dispatch(findPropinsisSuccess(data));
        })
        .catch(error => {
          dispatch(findPropinsisError(error));
        });
    };
  
  function editPropinsiSuccess(data) {
    return{
      type: EDIT_PROPINSI_SUCCESS,
      data: data
    };
  
  }
  
  function editPropinsiError(error) {
    return{
      type: EDIT_PROPINSI_FAILURE,
      error: error
    };
  
  }
    
  function addPropinsiSuccess(data) {
    return{
      type: ADD_PROPINSI_SUCCESS,
      data: data
    };
  
  }
  
  function addPropinsiError(error) {
    return{
      type: ADD_PROPINSI_FAILURE,
      error: error
    };
  
  }
  
  function deletePropinsiSuccess(data) {
    return{
      type: DELETE_PROPINSI_SUCCESS,
      data: data
    };
  
  }
  
  function deletePropinsiError(error) {
    return{
      type: DELETE_PROPINSI_FAILURE,
      error: error
    };
  
  }
  
  function findPropinsiSuccess(data) {
    return{
      type: FIND_PROPINSI_SUCCESS,
      data: data
    };
  }
  function findPropinsiError(error) {
    return{
      type: FIND_PROPINSI_FAILURE,
      error: error
    };
  }
  function findPropinsisSuccess(data) {
    return{
      type: FIND_PROPINSIS_SUCCESS,
      data: data
    };
  }
  function findPropinsisError(error) {
    return{
      type: FIND_PROPINSIS_FAILURE,
      error: error
    };
  }
      