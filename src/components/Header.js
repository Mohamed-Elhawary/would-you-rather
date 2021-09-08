import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";
import { connect } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';
import { Button } from "antd";
import { removeAuthedUser } from 'actions/authedUser';
import { Avatar } from 'ui';
import logo from "assets/images/logo.png";

const Header = ({authedUser, users, dispatch}) => {
	return (
		<Navbar bg="light" variant="light" expand="lg" collapseOnSelect >
			<Container>
				<Navbar.Brand><Link to="/"><img src={logo} alt="logo" width="50" height="50" /></Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />	
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="mr-3 mt-3 main-color font-bold" exact>Home</NavLink>
						<NavLink to="/leaderboard" className="mr-3 mt-3 main-color font-bold" exact>Leaderboard</NavLink>
						{authedUser && (
							<>
								<NavLink to="/new" className="mr-3 mt-3 main-color font-bold" exact>New Question</NavLink>
								<span className="d-inline-block d-lg-none main-color mt-3">
									<Avatar 
										src={users[authedUser].avatarURL} 
										width="45" 
										height="45" 
										className="mr-2" />
									Welcome, <span className="font-bold">{users[authedUser].name}</span>
								</span>
								<Button 
									className="main-bg secondary-color font-bold secondary-border p-2 radius mt-lg-0 mt-3 d-inline-block d-lg-none" 
									style={{width: "fit-content", minHeight: "40px"}}
									onClick={() => dispatch(removeAuthedUser())}
								>
									<BiLogOut size={25} className="mr-2" />Logout
								</Button>	
							</>
						)}
					</Nav>
				</Navbar.Collapse>
				{authedUser && (
					<>
						<span className="d-none d-lg-inline-block mr-3 main-color">
							<Avatar 
								src={users[authedUser].avatarURL} 
								width="45" 
								height="45" 
								className="mr-2" />
							Welcome, <span className="font-bold">{users[authedUser].name}</span>
						</span>
						<Button 
							className="main-bg secondary-color font-bold secondary-border p-2 radius mt-lg-0 mt-3 d-none d-lg-inline-block" 
							style={{width: "fit-content", minHeight: "40px"}}
							onClick={() => dispatch(removeAuthedUser())}
						>
							<BiLogOut size={25} className="mr-2" />Logout
						</Button>
					</>
				)}	
			</Container>
		</Navbar>
	)
}

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});

export default connect(mapStateToProps)(Header);