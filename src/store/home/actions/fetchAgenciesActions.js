import axios from "axios";
const SERVER_URL = "http://" + window.location.host;

/* fetching, get requests */
export const FETCH_AGENCIES = "FETCH_AGENCIES";
let fetchAgencies = (dispatch) => {
    return (activityId) => {
        dispatch({ type: FETCH_AGENCIES});
         let url = SERVER_URL + "/api/agencies";
         console.log("request: ", url);
         axios.get(url)
         .then((response) => {
            console.log("respones: ", response.data);
            dispatch(fetchAgenciesSuccess(response.data));
         })
         .catch((error) => {
            dispatch(fetchAgenciesFailure(error));
         });
    }
};

/* fetch success */
export const FETCH_AGENCIES_SUCCESS = "FETCH_AGENCIES_SUCCESS";
let fetchAgenciesSuccess = (payload) => {
    console.log("payload: ", payload);
    return { type: FETCH_AGENCIES_SUCCESS, payload: payload };
};

/* fetch failure */
export const FETCH_AGENCIES_FAILURE = "FETCH_AGENCIES_FAILURE";
let fetchAgenciesFailure = (error) => {
    return { type: FETCH_AGENCIES_FAILURE, error: error };
};

export {
    fetchAgencies,
    fetchAgenciesSuccess,
    fetchAgenciesFailure,
}
