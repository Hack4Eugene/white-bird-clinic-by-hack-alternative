import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import * as Actions from '../../../store/agencyModal/actions'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import AgencyModal from '../AgencyModal'

const mapDispatchToProps = (dispatch) => ({
    /* not sure what does it do, but it is quite important*/
    /* https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js */
    fetchOneAgency: Actions.fetchOneAgencyActions.fetchOneAgency(dispatch)
})

const mapStateToProps = (state, ownProps) => {
    return {
        agency: state.agencyModal.get('data'),
        modalIsopen: state.agencyModal.get('agencyModalIsOpen'),
        _id: state.agencyModal.get('_id')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyModal)
