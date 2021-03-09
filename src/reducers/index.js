import { combineReducers } from 'redux';
import {repositorySearched} from "./repository-searched";
import {repositoryPath} from "./repository-path";

export const  initialState = {
    repositorySearched: [],
    repositoryPath: ''
};

const reducers = {
    repositorySearched,
    repositoryPath
};

export default combineReducers(reducers);
