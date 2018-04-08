import axios from "axios";
const SERVER_URL = "http://"+window.location.host;

/* fetching, get requests */
export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
let fetchUserProfile = (dispatch) => {
    return () => {
        dispatch( {type: FETCH_USER_PROFILE} );
        let url = SERVER_URL + "/api/user/profile";
        axios.get(url)
            .then((response) => {
                dispatch(fetchUserProfileSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchUserProfileFailure(error));
            });
    }
};

/* fetch success */
export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS ";
let fetchUserProfileSuccess = (payload) => {
    return {type: FETCH_USER_PROFILE_SUCCESS, payload: payload};
};

/* fetch failure */
export const FETCH_USER_PROFILE_FAILURE = "FETCH_USER_PROFILE_FAILURE";
let fetchUserProfileFailure = (error) => {
    return {type: FETCH_USER_PROFILE_FAILURE, error: error};
};

export {
  fetchUserProfile,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
}
