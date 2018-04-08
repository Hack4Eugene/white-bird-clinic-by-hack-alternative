let handleDeleteSurvey = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isDeleting'], true);
    return newState;
}

let handleDeleteSurveyFailure = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isDeleting'], false);
    return newState;
}

let handleDeleteSurveySuccess = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isDeleting'], false);
    newState = newState.setIn(['surveysViewData', 'openDeleteModal'], false);
    return newState;
}

export {
    handleDeleteSurvey,
    handleDeleteSurveySuccess,
    handleDeleteSurveyFailure
}
