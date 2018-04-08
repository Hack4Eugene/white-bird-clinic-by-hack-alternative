import {Map, Set, List, OrderedSet} from 'immutable';
// add more handlers for fetching activity list action
let handleFetchUserProfile = (state, payload) => {
    let newState = state.updateIn(['accountSettingsViewData', 'isLoading'], settings => {
        return true;
    });
    newState = newState.updateIn(['accountSettingsViewData', 'failedToGet'], settings => {
        return false;
    });
    return newState;

}
let handleFetchUserProfileSuccess= (state, payload) => {

    let newState = state.updateIn(['accountSettingsViewData', 'userName'], settings => {
        return payload['name'];
    });

    newState = newState.updateIn(['accountSettingsViewData', 'email'], settings => {
        return payload['email'];
    });

    newState = newState.updateIn(['accountSettingsViewData', 'photo'], settings => {
        return payload['image'];
    });

    newState = newState.updateIn(['accountSettingsViewData', 'createdAt'], settings => {
        return payload['createdAt'];
    });

    newState = newState.updateIn(['accountSettingsViewData', 'isLoading'], settings => {
        return false;
    });

    newState = newState.updateIn(['accountSettingsViewData', 'failedToGet'], settings => {
        return false;
    });

    return newState;
}

let handleFetchUserProfileFailure= (state, payload) =>  {
    let newState = state.updateIn(['accountSettingsViewData', 'failedToGet'], settings => {
        return true;
    });

    return newState;

}

export {
    handleFetchUserProfile,
    handleFetchUserProfileSuccess,
    handleFetchUserProfileFailure
}
