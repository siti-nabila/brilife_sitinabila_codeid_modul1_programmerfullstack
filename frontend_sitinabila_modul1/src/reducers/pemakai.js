import { 
    EDIT_PEMAKAI_REQUEST, EDIT_PEMAKAI_SUCCESS, EDIT_PEMAKAI_FAILURE, 
    ADD_PEMAKAI_REQUEST, ADD_PEMAKAI_SUCCESS, ADD_PEMAKAI_FAILURE,
    DELETE_PEMAKAI_REQUEST, DELETE_PEMAKAI_SUCCESS, DELETE_PEMAKAI_FAILURE,
    FIND_PEMAKAI_REQUEST, FIND_PEMAKAI_SUCCESS, FIND_PEMAKAI_FAILURE,
    FIND_PEMAKAIS_REQUEST , FIND_PEMAKAIS_SUCCESS, FIND_PEMAKAIS_FAILURE
} from "../actions/constants"; 

const defaultState = {
    data: null, 
    loading: false, 
    error: null
};

export function addPemakai(state = {...defaultState, addSuccess: false} , action) {
    switch (action.type) {
        case ADD_PEMAKAI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_PEMAKAI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null,
                addSuccess: true
            }
        case ADD_PEMAKAI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export function updatePemakaiById(state = defaultState , action) {
    switch (action.type) {
        case EDIT_PEMAKAI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case EDIT_PEMAKAI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case EDIT_PEMAKAI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export function deletePemakaiById(state = defaultState , action) {
    switch (action.type) {
        case DELETE_PEMAKAI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_PEMAKAI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_PEMAKAI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}


export function findPemakaiById(state = defaultState , action) {
    switch (action.type) {
        case FIND_PEMAKAI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FIND_PEMAKAI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PEMAKAI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        default:
            return state;
    }
}

export function findPemakais(state = defaultState, action) {
    switch(action.type) {
        case FIND_PEMAKAIS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FIND_PEMAKAIS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PEMAKAIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
 