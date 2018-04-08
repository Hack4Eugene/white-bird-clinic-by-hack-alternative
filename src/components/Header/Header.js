import React from 'react'
import { Link } from 'react-router'
import { Button, Dropdown, Icon, Menu, Image } from 'semantic-ui-react'

class _SettingMenu extends React.Component {
    constructor () {
        super()
    }

    componentWillMount () {
    }

    render () {
        const options = [
            {key: 'dashboard', icon: 'dashboard', text: 'Dashboard', src: `/dashboard?view=activity`},
            {key: 'settings', icon: 'setting', text: 'Settings', src: `/dashboard?view=accountSettings`},
        ]

        let menuItems = options.map((op) =>
            <Dropdown.Item as={Link} to={op.src} key={op.key}>
                <Icon name={op.icon}/>{op.text}
            </Dropdown.Item>)

        const {unauthenticate} = this.props
        return (
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Dropdown
                        trigger={
                            <span>
                                <Icon name='options' size={'large'} color={'grey'}/>
                            </span>
                        }
                    >
                        <Dropdown.Menu style={{marginTop: '20px'}}>
                            <Dropdown.Item disabled={true}>
                                <span>
                                    Signed in as <strong>{this.props.accountSettingsViewData.get('userName')}</strong>
                                </span>
                            </Dropdown.Item>
                            {menuItems}
                            <Dropdown.Item onClick={unauthenticate}>
                                <Icon name="sign out"/>Sign out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
        )
    }
}

class _AuthenticationMenu extends React.Component {
    constructor () {
        super()
    }

    redirectToLogin = () => { this.props.push('/login') }
    redirectToSignup = () => { this.props.push('/signup') }

    render () {
        return (
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button primary onClick={this.redirectToLogin}> <Icon name="sign in"/>log in</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={this.redirectToSignup}> <Icon name="add user"/>Sign up</Button>
                </Menu.Item>
            </Menu.Menu>
        )
    }
}

class Header extends React.Component {
    constructor () {
        super()
    }

    render () {
        const {isAuthenticated, unauthenticate, push, replace} = this.props
        let createMenuContent = () =>
            isAuthenticated ?
                <_SettingMenu
                  push={push}
                  fetchUserProfile={ this.props.fetchUserProfile}
                  accountSettingsViewData={ this.props.accountSettingsViewData}
                  unauthenticate={unauthenticate}
                /> :
                <_AuthenticationMenu push={push}/>

        return (
            <Menu size='small' attached="top" fixed="top"
                  style={ {height: '55px', zIndex: 1500}}>
                        <Image src='/image1.jpg'  style ={{height:48,width:48,marginTop:3, marginLeft:3} }  />

                <Menu.Item onClick={this.handleItemClick}>
            <p style = {{fontWeight:'bold'}} > Whitebird Human Service Directory</p>
           </Menu.Item>  </Menu>
        )
    }
}

export default Header
