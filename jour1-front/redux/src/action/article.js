import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";

export const getArticles = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/articles")
                .then( (res) => dispatch({ type: GET_ARTICLES , payload : res.data }))
                .catch( ex  => console.log(ex))
    }
}