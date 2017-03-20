import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from './App.js'

import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={App} />
				<Route path="/hello" component={App} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'))
