import React, { Component } from "react";
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import {handleInitialData} from "actions/shared";
import {Layout} from "layout";
import {Routes} from "routes";
class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<div className="App">
				<LoadingBar style={{zIndex: "999", backgroundColor: "#40a9ff"}}/>
				<Layout>
					<Routes />
				</Layout>
			</div>
		);	
	}
}

export default connect()(App);
