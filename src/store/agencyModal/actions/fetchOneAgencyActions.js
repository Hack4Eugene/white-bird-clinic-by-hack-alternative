import axios from "axios";
const SERVER_URL = "http://" + window.location.host;

/* fetching, get requests */
export const FETCH_ONE_AGENCY = "FETCH_ONE_AGENCY";
let fetchOneAgency = (dispatch) => {
    return (agencyId) => {
        dispatch({ type: FETCH_ONE_AGENCY});
         let url = SERVER_URL + "/api/agencies/" + agencyId;
         console.log("request: ", url);
         axios.get(url)
         .then((response) => {
            console.log("FETCH ONE respones: ", response.data);
            dispatch(fetchOneAgencySuccess(response.data));
         })
         .catch((error) => {
            dispatch(fetchOneAgencyFailure(error));
         });
    }
};

/* fetch success */
export const FETCH_ONE_AGENCY_SUCCESS = "FETCH_ONE_AGENCY_SUCCESS";
let fetchOneAgencySuccess = (payload) => {
    console.log("FETCH ONE (action) payload: ", payload);
    return { type: FETCH_ONE_AGENCY_SUCCESS, payload: payload };
};

/* fetch failure */
export const FETCH_ONE_AGENCY_FAILURE = "FETCH_ONE_AGENCY_FAILURE";
let fetchOneAgencyFailure = (error) => {
    return { type: FETCH_ONE_AGENCY_FAILURE, error: error };
};

export {
    fetchOneAgency,
    fetchOneAgencySuccess,
    fetchOneAgencyFailure,
}
