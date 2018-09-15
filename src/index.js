import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route } from 'react-router-dom'
import App from './components/App';
import { createBrowserHistory } from 'history'
import historyTracker from './util/historyTracker'

const customHistory = createBrowserHistory({
	basename: process.env.basename
});

const addHistory = historyTracker();
let historyObject = { from: null, to: null };

customHistory.listen((location) => {
	console.log('index history.listen');
	historyObject = addHistory(location);
	console.log(historyObject);
});

ReactDOM.render(
	<Router history={customHistory} >
		<Route render={(props) => <App {...props} addHistory={addHistory} historyObject={historyObject} />} />
	</Router>
	, document.getElementById('root')
);