import axios from "axios";
const SERVER_URL = "http://" + window.location.host;

/* fetching, get requests */
export const OPEN_MODAL = "OPEN_MODAL";
let openModal = (dispatch) => {
    return (activityId) => {
        dispatch({ type: OPEN_MODAL});
        dispatch(openModalSuccess(activityId));
    }
};

/* fetch success */
export const OPEN_MODAL_SUCCESS = "OPEN_MODAL_SUCCESS";
let openModalSuccess = (payload) => {
    return { type: OPEN_MODAL_SUCCESS, payload: payload };
};


export {
    openModal,
    openModalSuccess
}
