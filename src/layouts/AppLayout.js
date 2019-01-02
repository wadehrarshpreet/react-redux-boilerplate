import { connect } from "react-redux";
import React, { Suspense } from "react";
import { Header } from "../component/Shared";
import Contact from "../component/Contact";
import Home from "../component/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import { init } from "../actions/init";
import "../style/style.scss";

const About = React.lazy(() => {
	return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(() => {
		return import("../component/About/index.js");
	});
});

class AppLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		props.init();
	}
	render() {
		const { loading } = this.props;
		return (
			<div>
				<Header active={this.props.active} />
				{loading ? (
					<div>Loading ...</div>
				) : (
					<main>
						<Switch>
							<Route exact path='/' render={() => <Home />} />
							<Route
								exact
								path='/about'
								render={() => {
									return (
										<div>
											<Suspense fallback={<div> Loading ...</div>}>
												<About />
											</Suspense>
										</div>
									);
								}}
							/>
							<Route exact path='/contact' render={() => <Contact />} />
						</Switch>
					</main>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { loading: state.init.loading };
}

function matchDispatchToProps(dispatch) {
	return {
		init() {
			dispatch(init());
		}
	};
}

export default withRouter(
	connect(
		mapStateToProps,
		matchDispatchToProps
	)(AppLayout)
);
