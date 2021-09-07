import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Button, Input, Form } from 'antd';
import { handleAddQuestion } from "actions/shared";

class NewQuestion extends Component { 
    state = {
        questionOptions: {
            optionOne: "",
            optionTwo: ""
        },
        submitError: false,
        submitSuccess: false,
    }

    handleSubmit(){
        const optionOneValue = this.state.questionOptions.optionOne;
        const optionTwoValue = this.state.questionOptions.optionTwo;
        
        if(!optionOneValue && !optionTwoValue) {
            this.setState({submitError: true});
        } else {
            this.props.addQuestion({
                optionOneText: optionOneValue, 
                optionTwoText: optionTwoValue,
                author: this.props.authedUser
            });
        
            this.setState({submitSuccess: true});
        }
    }

    render() {
        const {questionOptions, submitError, submitSuccess} = this.state;
        
        if(submitSuccess) {
            return <Redirect to="/" />
        }

        return (
            <div className="view-page">
                <Container>
                    <Form 
                        className="my-5 text-center mx-auto secondary-border py-4 px-3 shadow radius" 
                        style={{maxWidth: "550px"}}
                    >
                        <h3 className="my-4 font-bold main-color">New Question</h3>
                        <p className="my-4 font-bold third-color">Would You Rather</p>
                        <Form.Item
                            label="Option 1"
                            name="optionOne"
                            rules={[{ required: true}]}
                        >
                            <Input onChange={(e) => this.setState({questionOptions: {...questionOptions, optionOne: e.target.value}})}/>
                        </Form.Item>
                        <Form.Item
                            label="Option 2"
                            name="optionTwo"
                            rules={[{ required: true}]}
                        >
                            <Input onChange={(e) => this.setState({questionOptions: {...questionOptions, optionTwo: e.target.value}})} />
                        </Form.Item>
                        <Button 
                            type="submit" 
                            className="main-bg mt-4 radius secondary-color font-bold" 
                            block 
                            style={{width: "80%"}}
                            onClick={() => this.handleSubmit()}
                        >Add</Button>
                        {submitError && <span className="notify-text text-danger font-italic font-bold d-inline-block">Please add Two Options First</span>}
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => ({authedUser});

const mapDispatchToProps = dispatch => ({
    addQuestion: ({optionOneText, optionTwoText, author}) => dispatch(handleAddQuestion({optionOneText, optionTwoText, author}))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);