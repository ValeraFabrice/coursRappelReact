import { GET_ARTICLES } from "../action/article"
const initialState = [];

export default function reducer(state = initialState , action){
    if(action.type === GET_ARTICLES){
        return action.payload;
    }
    return state ; 
}