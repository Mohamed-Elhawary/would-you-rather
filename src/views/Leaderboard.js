import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { User } from 'components';

class Leaderboard extends Component {
    render() {
        const {usersId} = this.props;
        return (
            <div className="view-page">
                <Container>
                    <h3 className="font-bold text-center main-color my-4">Leaderboard</h3>
                    {usersId.map(userId => (
                        <User 
                            key={userId} 
                            userId={userId} 
                        />
                    ))}
                </Container>
            </div>
        )
    }
}

const mapStateToPro = ({ users }) => ({ 
    usersId: Object.keys(users).sort((a, b) => 
        (Object.keys(users[b].answers).length + users[b].questions.length) - 
        (Object.keys(users[a].answers).length + users[a].questions.length)
    )
});

export default connect(mapStateToPro)(Leaderboard);