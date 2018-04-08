import {Map, Set, List, OrderedSet} from 'immutable';
// add more handlers for fetching activity list action
let handleFetchingActivityList = (state, payload) => {
    let newState = state.updateIn(['activitiesViewData', 'isLoading'], activities => {
        return true;
    });
    newState = newState.updateIn(['activitiesViewData', 'failedToGet'], activities => {
        return false;
    });
    return newState;

}
let handleFetchActivityListSuccess = (state, payload) => {
    let newState = state.set("tempData", payload);
    return newState;
}

let handleFetchActivityListFailure = (state, payload) =>  {
    let newState = state.updateIn(['activitiesViewData', 'failedToGet'], activities => {
        return true;
    });

    return newState;

}

export {
    handleFetchingActivityList,
    handleFetchActivityListSuccess,
    handleFetchActivityListFailure
}
