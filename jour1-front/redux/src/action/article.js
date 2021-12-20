import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";
export const GET_NB_ARTICLES = "GET_NB_ARTICLES"; 

export const getArticles = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/articles")
                .then( (res) => dispatch({ type: GET_ARTICLES , payload : res.data }))
                .catch( ex  => console.log(ex))
    }
}

export const getNbArticles = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/articles")
                .then( (res) => dispatch({ type: GET_NB_ARTICLES , payload : res.data.length }))
                .catch( ex  => console.log(ex))
    }
}