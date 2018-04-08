import axios from "axios";
const SERVER_URL = "http://" + window.location.host;

/* fetching, get requests */
export const SEARCH_AGENCIES = "SEARCH_AGENCIES";
let searchAgencies = (dispatch) => {
    return (query) => {
        dispatch({ type: SEARCH_AGENCIES});
         let url = SERVER_URL + "/api/agencies/search/" + query;
         console.log("request: ", url);
         axios.get(url)
         .then((response) => {
            console.log("respones: ", response.data);
            dispatch(searchAgenciesSuccess(response.data));
         })
         .catch((error) => {
            dispatch(searchAgenciesFailure(error));
         });
    }
};

/* fetch success */
export const SEARCH_AGENCIES_SUCCESS = "SEARCH_AGENCIES_SUCCESS";
let searchAgenciesSuccess = (payload) => {
    console.log("payload: ", payload);
    return { type: SEARCH_AGENCIES_SUCCESS, payload: payload };
};

/* fetch failure */
export const SEARCH_AGENCIES_FAILURE = "SEARCH_AGENCIES_FAILURE";
let searchAgenciesFailure = (error) => {
    return { type: SEARCH_AGENCIES_FAILURE, error: error };
};

export {
    searchAgencies,
    searchAgenciesSuccess,
    searchAgenciesFailure,
}
