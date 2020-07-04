import { 
    EDIT_PROPINSI_REQUEST, EDIT_PROPINSI_SUCCESS, EDIT_PROPINSI_FAILURE, 
    ADD_PROPINSI_REQUEST, ADD_PROPINSI_SUCCESS, ADD_PROPINSI_FAILURE,
    DELETE_PROPINSI_REQUEST, DELETE_PROPINSI_SUCCESS, DELETE_PROPINSI_FAILURE,
    FIND_PROPINSI_REQUEST, FIND_PROPINSI_SUCCESS, FIND_PROPINSI_FAILURE,
    FIND_PROPINSIS_REQUEST , FIND_PROPINSIS_SUCCESS, FIND_PROPINSIS_FAILURE
} from "../actions/constants"; 

const defaultState = {
    data: null, 
    loading: false, 
    error: null
};

export function addPropinsi(state = {...defaultState, addSuccess: false} , action) {
    switch (action.type) {
        case ADD_PROPINSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_PROPINSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null,
                addSuccess: true
            }
        case ADD_PROPINSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export function updatePropinsiById(state = defaultState , action) {
    switch (action.type) {
        case EDIT_PROPINSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case EDIT_PROPINSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case EDIT_PROPINSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export function deletePropinsiById(state = defaultState , action) {
    switch (action.type) {
        case DELETE_PROPINSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_PROPINSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_PROPINSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}


export function findPropinsiById(state = defaultState , action) {
    switch (action.type) {
        case FIND_PROPINSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FIND_PROPINSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PROPINSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        default:
            return state;
    }
}

export function findPropinsis(state = defaultState, action) {
    switch(action.type) {
        case FIND_PROPINSIS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FIND_PROPINSIS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PROPINSIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
 