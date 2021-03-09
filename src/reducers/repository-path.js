import {ADD_REPOSITORY_PATH} from "../constants/actions";
import {initialState} from "./index";

export const repositoryPath = (state = initialState.repositoryPath, action) =>{
    switch (action.type) {
        case ADD_REPOSITORY_PATH:
            return  action.payload;
        default:
            return state;
    }
};