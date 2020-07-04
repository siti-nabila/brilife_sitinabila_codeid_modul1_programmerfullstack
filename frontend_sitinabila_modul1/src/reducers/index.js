import { combineReducers } from 'redux';
import {findPropinsiById, findPropinsis, deletePropinsiById, addPropinsi, updatePropinsiById} from './propinsi';
import {findPemakaiById, findPemakais, deletePemakaiById, addPemakai, updatePemakaiById} from './pemakai';
import {findKontrasepsiById, findKontrasepsis, deleteKontrasepsiById, addKontrasepsi, updateKontrasepsiById} from './kontrasepsi';


export default combineReducers({
    findPropinsis,
    findPropinsiById,
    deletePropinsiById,
    updatePropinsiById,
    addPropinsi,
    findPemakais,
    findPemakaiById,
    deletePemakaiById,
    updatePemakaiById,
    addPemakai,
    findKontrasepsis,
    findKontrasepsiById,
    deleteKontrasepsiById,
    updateKontrasepsiById,
    addKontrasepsi
});