import React from 'react'
import {Grid, Loader, Segment, Sticky, Button, Header, Icon} from 'semantic-ui-react'

import UserIsAuthenticated from '../../UserIsAuthenticated'

const _DashboardContentWrapper = (props) => (
    <div style={ {
        marginTop: "3%",
        width: '100%',
        paddingLeft: "290px",
    } }>
        { props.children }
    </div>
);

class DashboardView extends React.Component {
    constructor () {
        super()
    }

    componentWillMount () {
      this.props.fetchActivityList();
    }

    render () {
      let nonverifiedStamp =
      <Header as='h2' icon>
        <Icon color='red' name='remove' />
        Not Verified
      </Header>;

      let verifiedStamp =
      <Header as='h2' icon>
        <Icon color='green' name='checkmark' />
        Verified
      </Header>

        return (
            <div>
            <Segment raised textAlign='center' style={{marginTop:20}}>
            <Header as='h2' icon>
              <Icon color='red' name='remove' />
              Not Verified
            </Header>

              <p>
                Submitted By: "email@org.com"
              </p>
              <p>
                ADA_Access: ""
              </p>
              <p>
                Completion_Status: "Complete"
              </p>
              <p>
                Description_of_Service: "Provides free information on over 2,700 community agencies providing over 30,000 programs to people throughout Oregon and Southwest Washington."
              </p>
              <p>
                Fax: ""
              </p>
              <p>
                Hours_of_Operation: "M - F 8 - 6, Texting available M - F 9 - 5"
              </p>
              <p>
                Intended_Participants: ""
              </p>
              <p>
                Languages_Spoken : ["Spanish and access to interpreter service with more than 140 languages."]
              </p>
              <p>
                Location: ["Eugene", "Bethel"]
              </p>
              <p>
              Main_Phone: "211 or text your zip code to 898211"
              </p>
              <Button positive>Approve</Button>
              <Button negative>Reject</Button>
            </Segment>
            <Segment raised textAlign='center' style={{marginTop:20}}>
            <Header as='h2' icon>
              <Icon color='green' name='checkmark' />
              Verified
            </Header>

              <p>
                Submitted By: "email@org.com"
              </p>
              <p>
                ADA_Access: ""
              </p>
              <p>
                Completion_Status: "Complete"
              </p>
              <p>
                Description_of_Service: "Provides free information on over 2,700 community agencies providing over 30,000 programs to people throughout Oregon and Southwest Washington."
              </p>
              <p>
                Fax: ""
              </p>
              <p>
                Hours_of_Operation: "M - F 8 - 6, Texting available M - F 9 - 5"
              </p>
              <p>
                Intended_Participants: ""
              </p>
              <p>
                Languages_Spoken : ["Spanish and access to interpreter service with more than 140 languages."]
              </p>
              <p>
                Location: ["Eugene", "Bethel"]
              </p>
              <p>
              Main_Phone: "211 or text your zip code to 898211"
              </p>
              <Button positive>Approve</Button>
              <Button negative>Reject</Button>
            </Segment>
            </div>
        )
    }
}

export default DashboardView
