import * as Actions from '../actions'
import * as ActionHandlers from './actionHandlers'
import {Map, Set, List, OrderedSet} from 'immutable';

const initialState = Map({
    data: Map({
      _id:'',
      Status:false,
      Completion_Status:false,
      Last_Editor:'',
      Proofed_By:'',
      Service_Name:'',
      Other_Names:'',
      Notes:'',
      Main_Phone:'',
      Other_Phone_Numbers:List([]),
      Fax:'',
      Physical_Site_Address:'',
      Physical_Site_City:'',
      Physical_Site_State:'',
      Physical_Site_Zip:'',
      Web_Address:'',
      Email:'',
      Other_Emails:List([]),
      ADA_Access:'',
      Languages_Spoken:List([]),
      WBCrisisLine:'',
      Hours_of_Operation:'',
      Intended_Participants:'',
      Description_of_Service:'',
      Location:'',
      Tag:'',
      Sub_Tag:'',
      Created_At:'',
      Last_Modified:'',
      Extra_Field_Titles:List([]),
      Extra_Field_Data:List([]),
    }),

    agencyModalIsOpen: false,
    agencyModalIsLoading: false,
});

let agencyModalReducer = (state = initialState, action) => {
    switch (action.type) {

        /* reduce fetch agency actions */
        case Actions.fetchAgenciesActions.FETCH_AGENCIES:
            return ActionHandlers.fetchAgenciesActionsHandlers.handleFetchAgencies(state, action.payload)
        case Actions.fetchAgenciesActions.FETCH_AGENCIES_SUCCESS:
            return ActionHandlers.fetchAgenciesActionsHandlers.handleFetchAgenciesSuccess(state, action.payload)
        case Actions.fetchAgenciesActions.FETCH_AGENCIES_FAILURE:
            return ActionHandlers.fetchAgenciesActionsHandlers.handleFetchAgenciesFailure(state, action.payload)


        case Actions.fetchOneAgencyActions.FETCH_ONE_AGENCY:
            return ActionHandlers.fetchOneAgencyActionsHandlers.handleFetchOneAgency(state, action.payload)
        case Actions.fetchOneAgencyActions.FETCH_ONE_AGENCY_SUCCESS:
            return ActionHandlers.fetchOneAgencyActionsHandlers.handleFetchOneAgencySuccess(state, action.payload)
        case Actions.fetchOneAgencyActions.FETCH_ONE_AGENCY_FAILURE:
            return ActionHandlers.fetchOneAgencyActionsHandlers.handleFetchOneAgencyFailure(state, action.payload)

        case Actions.searchAgenciesActions.SEARCH_AGENCIES:
            return ActionHandlers.searchAgenciesActionsHandlers.handleSearchAgencies(state, action.payload)
        case Actions.searchAgenciesActions.SEARCH_AGENCIES_SUCCESS:
            return ActionHandlers.searchAgenciesActionsHandlers.handleSearchAgenciesSuccess(state, action.payload)
        case Actions.searchAgenciesActions.SEARCH_AGENCIES_FAILURE:
            return ActionHandlers.searchAgenciesActionsHandlers.handleSearchAgenciesFailure(state, action.payload)


        default:
            return state

    }
}

export default agencyModalReducer
