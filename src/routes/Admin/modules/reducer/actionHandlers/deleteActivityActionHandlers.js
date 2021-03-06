let handleDeleteActivity = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isDeleting'], true);
    return newState;
}

let handleDeleteActivityFailure = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isDeleting'], false);
    return newState;
}

let handleDeleteActivitySuccess = (state, payload) => {
    let newState = state.setIn(['activitiesViewData', 'isDeleting'], false);
    newState = newState.setIn(['activitiesViewData', 'openDeleteModal'], false);
    return newState;
}

export {
    handleDeleteActivity,
    handleDeleteActivitySuccess,
    handleDeleteActivityFailure
}
