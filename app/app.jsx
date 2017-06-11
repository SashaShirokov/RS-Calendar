import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

let actions = require('actions');
let store = require('configureStore').configure();
import FeedBackAPI from 'FeedBackAPI';


store.subscribe(() => {
	let state = store.getState();
	console.log('New state', store);

	FeedBackAPI.setFeedBacks(state.feedbacks)
});


let initialFeedbacks = FeedBackAPI.getFeedBacks();
store.dispatch(actions.addFeedBacks(initialFeedbacks));
store.dispatch(actions.toggleShowList());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

import Main from 'Main';
import Schedule from 'Schedule';
import Curriculum from 'Curriculum';
import Month from 'Month';
import Week from 'Week';
import Weather from 'Weather';
import About from 'About';
import Timer from 'Timer';
import FeedBack from 'FeedBack'

ReactDOM.render(
		<Provider store={store}>
				<Router history={hashHistory}>
						<Route path="/" component={Main}>
								<Route path="schedule" component={Schedule}>
										<Route path="month" component={Month}/>
										<Route path="week" component={Week}/>
								</Route>
								<Route path="curriculum" component={Curriculum}/>
								<Route path="weather" component={Weather}/>
								<Route path="timer" component={Timer}/>
								<Route path="feedback" component={FeedBack}/>
								<Route path="about" component={About}/>
								<IndexRoute component={Schedule}/>
						</Route>
				</Router>
		</Provider>,
		document.getElementById('app')
);

// require('./redux-example.jsx');
