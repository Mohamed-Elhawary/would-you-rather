import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    AiFillLinkedin, 
    AiFillGithub, 
    AiFillCodepenCircle, 
    AiFillBehanceCircle 
} from "react-icons/ai";
import signature from "../assets/images/signature.png";

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
                All Rights reserved &copy; {new Date().getFullYear()}, <a href="https://github.com/Mohamed-Elhawary/would-you-rather" target="_blank">Would You Rather</a> {/* eslint-disable-line */}
                <p className="author">
                    <div>
                        Made by: 
                        <a href="https://www.linkedin.com/in/mohamed-elhawary14/" target="_blank"> {/* eslint-disable-line */} 
                            <img src={signature} alt="signature" width="100" height="40" />
                        </a>
                    </div>
                </p> 
                <ul className="social">
                    <li className="mr-3"><a href="https://www.linkedin.com/in/mohamed-elhawary14/" target="_blank"><AiFillLinkedin size={30} /></a></li> {/* eslint-disable-line */}
                    <li className="mr-3"><a href="https://github.com/Mohamed-Elhawary" target="_blank"><AiFillGithub size={30} /></a></li> {/* eslint-disable-line */}
                    <li className="mr-3"><a href="https://codepen.io/Mohamed-ElHawary" target="_blank"><AiFillCodepenCircle size={30} /></a></li> {/* eslint-disable-line */}
                    <li className="mr-3"><a href="https://www.behance.net/mohamed-elhawary14" target="_blank"><AiFillBehanceCircle size={30} /></a></li> {/* eslint-disable-line */}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({authedUser});

export default connect(mapStateToProps)(Footer);