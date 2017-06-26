import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory,hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import Game from './components/Game';

ReactDOM.render(

		<MuiThemeProvider>
		<Router history={hashHistory}>
		<Route path="/" component={Game} />
			</Router>
			</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
