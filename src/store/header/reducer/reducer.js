import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'
import {Map, Set, List, OrderedSet} from 'immutable';

const initialState = Map({
    accountSettingsViewData: Map({
        isLoading:true,
        failedToGet:false,

        userName:'',
        userNameHolder:'',


        createdAt:'',

        email:'',
        emailHolder:'',

        photo:'',
        photoHolder:'',

        currentPasswordHolder:'',
        newPasswordHolder:'',
        confirmPasswordHolder:'',



    }),

});

let dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        /* fetching user profile actions */
        case Actions.fetchUserProfileActions.FETCH_USER_PROFILE:
            return ActionHandlers.fetchUserProfileActionHandlers.handleFetchUserProfile(state, action.payload)
        case Actions.fetchUserProfileActions.FETCH_USER_PROFILE_SUCCESS:
            return ActionHandlers.fetchUserProfileActionHandlers.handleFetchUserProfileSuccess(state, action.payload)
        case Actions.fetchUserProfileActions.FETCH_USER_PROFILE_FAILURE:
            return ActionHandlers.fetchUserProfileActionHandlers.handleFetchUserProfileFailure(state, action.payload)

        default:
            return state

    }
}

export default dashboardReducer
