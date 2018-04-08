import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import {Map, List, Set} from 'immutable';

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import HomeView from '../components/HomeView'
import * as Actions from "../../../store/home/actions"

const mapDispatchToProps = (dispatch) => ({
    /* not sure what does it do, but it is quite important*/
    /* https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js */
    replace:  (newLocation) => { dispatch(routerActions.replace(newLocation)) },
    push:  (newLocation) => { dispatch(routerActions.push(newLocation)) },
    fetchAgencies: Actions.fetchAgenciesActions.fetchAgencies(dispatch),
    searchAgencies: Actions.searchAgenciesActions.searchAgencies(dispatch),
    openModal: Actions.openModalActions.openModal(dispatch)
})


const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authentication.get("jwtToken"),
        homeViewData: state.home.get("HomeViewData"),
        redirect: ownProps.location.query.redirect || '/',
        agencyModal: state.home.get("agencyModal"),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
