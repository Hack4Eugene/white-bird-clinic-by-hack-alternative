import _ from 'lodash'
import React, { Component } from 'react'
import Sticky from 'react-sticky';
import { Input, Button, Icon, Search, Grid, Header } from 'semantic-ui-react'


export default class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleSubmitSearch(e) {
    console.log(e.target.value);
    this.props.search(e.target.value);
  }

    handleStickyStateChange = () => {
    };

  render() {
    const { isLoading, value, results } = this.state

      const filterMenuStyle = {
            position: "relative",
            zIndex: 1000,
            backgroundColor: '#f9fafc',
            borderRadius: "5px",
        };

        const afterStickedStyle = {
            marginTop: '54px',
            borderRadius: "4px",
            backgroundColor: '#4f5254',
        };
    return (
          <Sticky isActive={true}
          style={ filterMenuStyle }
          topOffset={-55}
          stickyStyle={ afterStickedStyle }
          onStickyStateChange={this.handleStickyStateChange}
          >

          <Input
            size="massive"
            onChange={this.handleSubmitSearch.bind(this)}
            fluid
            placeholder="Search"
            action={
              <Button color="teal" style={{fontSize:18}} animated onClick={this.handleSubmitSearch}>
                <Button.Content visible>Search</Button.Content>
                <Button.Content hidden>
                  <Icon name='right arrow' />
                </Button.Content>
              </Button>
            }
            loading={isLoading}
          />
        </Sticky>
    )
  }
}
