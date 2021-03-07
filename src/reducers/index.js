import { combineReducers } from 'redux';
import {repositorySearched} from "./repository-searched";

export const  initialState = {
    repositorySearched: []
};

const reducers = {
    repositorySearched
};

export default combineReducers(reducers);
