import React, { Component, PropTypes } from 'react'
import {Grid, Loader, Segment, Sticky, Button, Header, Icon} from 'semantic-ui-react'
import AgencySegment from './AgencySegment'
import AgencyModal from '../../../components/AgencyModal'
import {Map, List, Set} from 'immutable';
import SearchBar from './SearchBar'

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResults: []
        }
    }


    static propTypes = {
        replace: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,

        redirect: PropTypes.string.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        /*
        if (isAuthenticated) {
            console.log("redirect");
            replace(redirect)
        }
        */
       this.props.fetchAgencies();
    }
    render() {
        console.log(this.props.homeViewData);

        let agencyList = [];

        this.props.homeViewData.get("agencies").map(
          (agency, i) => {
            agencyList.push(
                <AgencySegment key={"para" + i}
                  Service_Name={agency.get("Service_Name")}
                  Hours_Of_Operation={agency.get("Hours_Of_Operation")}
                  _id={agency.get("_id")}
                  Description_Of_Service={agency.get("Description_Of_Service")}
                  Main_Phone={agency.get("Main_Phone")}
                />)
          }
        )

        let searchBar = <SearchBar search={this.props.searchAgencies} />
        let noResults =   <Header as='h2' icon>
                            <Icon name='search' />
                            No Results To Show                          </Header>
        console.log("search bar:: ", searchBar);
        return (
            <div style={{textAlign:'center', marginTop:'200px'}}>
                {searchBar}
                <Loader style={{marginTop:10}} active={this.props.homeViewData.get("agenciesIsLoading")} size="massive" inline='centered' />
                {(this.props.homeViewData.get("agenciesIsLoading") || (agencyList && agencyList.length > 0)) ? agencyList : noResults}
            </div>

        )
    }

}
