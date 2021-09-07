import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = ({authedUser}) => {
    return (
        <div className="footer main-bg py-5 px-3">
            <div className="top-content mb-4">
                <div>  
                    <ul className="list-unstyled m-0 p-0 d-flex">
                        <li>
                            <Link to="/" className="secondary-color mr-3 font-bold">Home</Link>
                        </li>
                        <li>
                           <Link to="/leaderboard" className="secondary-color mr-3 font-bold">Leaderboard</Link>
                        </li>
                        {authedUser && (
                            <Link to="/new" className="secondary-color mr-3 font-bold">New Question</Link>
                        )}
                    </ul>
                </div>
            </div>
            <div className="bottom-content text-center">
                <p className="par secondary-color">All Rights are Reserved &copy; {new Date().getFullYear()}</p>
                <p className="par secondary-color">Made by <a href="https://github.com/Mohamed-Elhawary" target="_blank" className="secondary-color underline font-bold">HaWaRy</a></p>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({authedUser});

export default connect(mapStateToProps)(Footer);