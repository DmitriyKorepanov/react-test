import {ADD_REPOSITORY_SEARCHED} from "../constants/actions";
import {initialState} from "./index";

export const repositorySearched = (state = initialState.repositorySearched, action) =>{
    switch (action.type) {
        case ADD_REPOSITORY_SEARCHED:
            return  action.payload;
        default:
            return state;
    }
};