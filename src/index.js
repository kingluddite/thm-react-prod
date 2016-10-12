import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, } from 'react-router';

import './css/style.css';
import App from './components/App';
import MainEventPage from './components/MainEventPage';
import NotFound from './components/NotFound';

import './css/style.css';

// const repo = `/${window.location.pathname.split('/')[1]}`;
const Root = ( ) => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={MainEventPage}/>
				<Match pattern="/tickets" component={App}/>
				<Miss pattern="*" component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(
	<Root/>, document.querySelector( '#main' ));