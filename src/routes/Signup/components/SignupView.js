import React, { Component, PropTypes } from 'react'
import { Button, Grid, Header, Icon, Image, Label, Message, Segment } from 'semantic-ui-react'
import { Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select, } from 'formsy-semantic-ui-react'

class CountDownTimer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            secondsRemaining: 0
        }
    }

    static propTypes = {
        secondsRemaining: PropTypes.number.isRequired,
    }

    componentDidMount () {
        this.setState({secondsRemaining: this.props.secondsRemaining})
        this.interval = setInterval(() => {
                this.setState({secondsRemaining: this.state.secondsRemaining - 1})
                if (this.state.secondsRemaining <= 0) {
                    clearInterval(this.interval)
                }
            }
            , 1000)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    render () {
        return <span>{this.state.secondsRemaining}</span>
    }
}

class SignupView extends Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        signup: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        hideErrorMessage: PropTypes.func.isRequired,
        signingUp: PropTypes.bool.isRequired,
        signupSuccess: PropTypes.bool.isRequired,
        signupFailure: PropTypes.bool.isRequired
    }

    componentWillMount () {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            replace(redirect)
        }
    }

    handleOnValidSubmit = (formData) => {
        const {name, email, password} = formData
        const {signup} = this.props
        signup(name, email, password)
    }

    redirectToLogin = () => {
        this.props.push('/admin')
    }

    render () {
        const {hideErrorMessage, signingUp, signupFailure, signupSuccess} = this.props
        return (
            <Grid centered columns={3}>
                <Grid.Column >
                    <Segment>
                        <Form size="large"
                              onValidSubmit={this.handleOnValidSubmit}>
                            <Form.Input
                                        icon='user' iconPosition='left' placeholder='Username'
                                        name='name'
                                        instantValidation
                                        validations={{
                                          isAlpha:true,
                                          minLength:1,
                                          maxLength:35,

                                        }}
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            isAlpha: 'Letters only.',
                                            minLength: 'Minimum of one letter',
                                            maxLength: 'Maximum of 35 letters.',
                                            isDefaultRequiredValue: 'You must enter a username',
                                        }}
                                        required
                                        passRequiredToField={false}
                            />
                            <Form.Input icon='mail' iconPosition='left' placeholder='E-mail address'
                                        name='email'
                                        instantValidation
                                        validations="isEmail"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            isEmail: 'This has to be your email',
                                            isDefaultRequiredValue: 'You must enter an Email',
                                        }}
                                        required
                                        passRequiredToField={false}
                            />
                            <Form.Input icon='lock' iconPosition='left' placeholder='Password' type="password"
                                        name="password"
                                        instantValidation
                                        validations="minLength:6"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            minLength: 'at least 6 characters',
                                            equalsField: 'Passwords do not match',
                                            isDefaultRequiredValue: 'You must enter a password',
                                        }}
                                        required
                                        passRequiredToField={false}
                            />

                            <Form.Input icon='lock' iconPosition='left' placeholder='Confirm' type="password"
                                        name="password_confirm"
                                        validations="equalsField:password"
                                        errorLabel={ <Label color="red" pointing/> }
                                        validationErrors={{
                                            equalsField: 'Passwords do not match',
                                            isDefaultRequiredValue: 'You must Confirm your password',
                                        }}
                                        required
                                        passRequiredToField={false}
                            />

                            <Button fluid color="teal" loading={signingUp} size="large">Create Account</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

}

export default SignupView
