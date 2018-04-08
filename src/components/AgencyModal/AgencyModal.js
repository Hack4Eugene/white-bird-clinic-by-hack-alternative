import React from 'react'
import _ from 'lodash'
import { List, Button, Header, Icon, Image, Modal, Segment, Card } from 'semantic-ui-react'


class AgencyModal extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchOneAgency(this.props._id);
//    this.props.fetchOneAgency("5aca0068f57de7060e682a6b");

  }

  render(){
    let phoneLink = 'tel:'+this.props.agency.get("Main_Phone");
    let hours = ((this.props.agency.get("Hours_of_Operation")) ? this.props.agency.get("Hours_of_Operation") : "unknown hours");

    console.log("hours: ", this.props.agency.get("Hours_of_Operation"));

    let url = this.props.agency.get("Web_Address");
    if(url){
      let prefix = 'http://';
      if (url.substr(0, prefix.length) !== prefix) {
        url = prefix + url;
      }
    }

    let email = this.props.agency.get("Email");
    if(email){
      let prefix = 'mailto:';
      if (email.substr(0, prefix.length) !== prefix) {
        email = prefix + email;
      }
    }
    let emailItem =  email ? <List.Item><Icon name='mail' />{email}</List.Item> : null;
    let websiteItem = url ? <List.Item><Icon name='world' /><a href={url}>{this.props.agency.get("Web_Address")}</a></List.Item> : null;
    let addressItem = this.props.agency.get("Phyiscal_Site_Address") ?<List.Item><Icon name='map pin' />{this.props.agencies.get("Physical_Site_Address")}</List.Item> : null;
    let phoneItem = <List.Item><Icon name='phone' /><a href={phoneLink}>{this.props.agency.get("Main_Phone")}</a></List.Item>;
    console.log("phone: ", this.props.agency.get("Main_Phone"));
    return(
      <Modal closeOnDimmerClick={true} defaultOpen={false} open={this.props.agencyModalIsOpen}  dimmer='blurring'>
          <Modal.Header>{this.props.agency.get("Service_Name")}</Modal.Header>
          <Modal.Content scrolling>

          <Card>
            <Card.Content header = 'Info' />
            <Card.Content description = {hours} />
            <Card.Content extra>
              <List>
                {phoneItem}
                {emailItem}
                {websiteItem}
                {addressItem}
              </List>
            </Card.Content>
          </Card>
          <Modal.Description>
          <Header>Details</Header>
          <p>{this.props.agency.get("Description_of_Service")}</p>

          </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button primary>
          Proceed <Icon name='right chevron' />
          </Button>
          </Modal.Actions>
      </Modal>
    )

  }


}

export default AgencyModal;
