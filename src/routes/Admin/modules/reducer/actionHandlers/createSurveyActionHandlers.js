let handleCreateSurvey = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isCreating'], true);
    return newState;
}

let handleCreateSurveyFailure = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isCreating'], false);
    return newState;
}

let handleCreateSurveySuccess = (state, payload) => {
    let newState = state.setIn(['surveysViewData', 'isCreating'], false);
    newState = state.setIn(['surveysViewData', 'openCreateModal'], false);
    return newState;
}

export {
    handleCreateSurvey,
    handleCreateSurveySuccess,
    handleCreateSurveyFailure
}
