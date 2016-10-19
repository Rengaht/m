import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute,useRouterHistory} from 'react-router'

import Main from './modules/main'
import AWork from './modules/awork'
import About from './modules/about'


//import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createHashHistory } from 'history';
			
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}></Route>   
		<Route path="/about" component={About}></Route>    		
    	<Route path="/work/:id" component={AWork}></Route>    			    
  	</Router>), 
	document.getElementById('app')
);