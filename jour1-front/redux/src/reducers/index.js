import { GET_ARTICLES , GET_NB_ARTICLES } from "../action/article"
const initialState = [];

export default function reducer(state = initialState , action){
    if(action.type === GET_ARTICLES){
        return action.payload;
    }

    if(action.type === GET_NB_ARTICLES){
        return action.payload;
    }

    return state ; 
}