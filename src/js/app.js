import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute,useRouterHistory,applyRouterMiddleware} from 'react-router'
import {createHashHistory} from 'history'
import {useScroll} from 'react-router-scroll';

import Main from './pages/main'
import AWork from './pages/awork'
import About from './pages/about'
import Work from './pages/work'

			
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

function routerUpdate(){
	// document.body.scrollTop=0;
	// console.log(window.pageYOffset);
}

ReactDOM.render((
	<Router history={hashHistory} onUpdate={routerUpdate}
			render={applyRouterMiddleware(useScroll())}>
		<Route path="/" component={Main}>   
			<IndexRoute component={Work}/>
			<Route path="/about" component={About}></Route>    		
	    	<Route path="/work/:id" component={AWork}></Route>       
    	</Route>	 			   
  	</Router>), 
	document.getElementById('app')
);