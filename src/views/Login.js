import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Select, Button, Form } from 'antd';
import { setAuthedUser } from 'actions/authedUser';
import { Avatar } from 'ui';
import logo from 'assets/images/logo.png';

const { Option } = Select;

class Login extends Component {
    state = {
        selectedUser: {value: "", id: ""},
        submitError: false,
        submitSuccess: false,
    }

    handleSubmit(){
        if(!this.state.selectedUser.value) {
            this.setState({submitError: true});
        } else {
            this.props.setAuthedUser(this.state.selectedUser.id);
            this.setState({submitSuccess: true});
        }
    }

    render() {
        const {users, usersIds, location} = this.props;
        const {selectedUser, submitError, submitSuccess} = this.state;
        const { from } = (location.state || { from: { pathname: "/" } }); 
        
        if(submitSuccess) {
            return <Redirect to={from.pathname} />
        }

        return (
            <div className="view-page">
                <Container>
                    <Form 
                        className="my-5 text-center mx-auto secondary-border py-4 px-3 shadow radius" 
                        style={{maxWidth: "550px"}}
                    >
                        <img src={logo} alt="logo" width="80" height="80" />
                        <h3 className="my-4 font-bold main-color">Would Your Rather</h3>
                        <p className="my-4 font-bold third-color">Please Select user to login</p>
                        <Select 
                            placeholder="Select User.." 
                            style={{ width: "80%" }} 
                            onChange={(value, data) => this.setState({selectedUser: {...selectedUser, value, id: data.key}})}
                        >
                            {usersIds.map(userId => (
                                <Option 
                                    value={users[userId].name} 
                                    key={userId}
                                    className="third-color font-bold"
                                >
                                    <Avatar 
                                        src={users[userId].avatarURL}  
                                        width="45" 
                                        height="45" 
                                        className="mr-4" />
                                    <span>{users[userId].name}</span>
                                </Option>
                            ))}
                        </Select>
                        <Button 
                            type="submit" 
                            className="main-bg mt-4 radius secondary-color font-bold" 
                            block 
                            style={{width: "80%"}}
                            onClick={() => this.handleSubmit()}
                        >Login</Button>
                        {submitError && <span className="notify-text text-danger font-italic font-bold d-inline-block">Please Select an User First</span>}
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    users,
    usersIds: Object.keys(users)
});

const mapDispatchToProps = dispatch => ({
    setAuthedUser: (userId) => dispatch(setAuthedUser(userId)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));