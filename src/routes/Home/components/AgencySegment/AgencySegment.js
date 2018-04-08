import React from 'react'
import { Segment, Header, Icon, Button} from 'semantic-ui-react'


class AgencySegment extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let phoneLink = 'tel:'+this.props.Main_Phone;
    let hours = ((this.props.Hours_Of_Operation) ? this.props.Hours_Of_Operation : "unknown hours")
    return(
      <Segment raised>
        <Header size='large'>
        {this.props.Service_Name}
          <Header.Subheader style={{fontSize:18, color:'black'}} icon>
            <Icon name='time' />
            {hours}
            <Icon style={{marginLeft:10}} name='phone' />
            <a href={phoneLink} style={{ textDecoration: 'none', color:'black' }}>{this.props.Main_Phone}</a>
          </Header.Subheader>
          <Header.Subheader style={{fontSize:18, color:'black'}} icon>
            <Icon style={{marginLeft:10}} name='car' />
            0.00 miles away
          </Header.Subheader>
        </Header>
        <Header size='medium'>{this.props.Description_Of_Service}</Header>
        <Button color='teal' icon labelPosition='left'>
          <Icon name='file text' />
          More Details
        </Button>
      </Segment>
    )

  }




}

export default AgencySegment
