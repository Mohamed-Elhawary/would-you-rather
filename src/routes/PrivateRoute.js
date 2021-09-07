import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, path, authedUser, exact }) => {
	return (
		<Route 
			exact={exact}
            path={path}
			render={({ location }) =>
				authedUser ?  <Component /> : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
			)}
		/>
	)
}

const mapStateToProps = ({authedUser}) => ({authedUser});

export default connect(mapStateToProps)(PrivateRoute);