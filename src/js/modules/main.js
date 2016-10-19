import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Work from './work'

import { RouteTransition } from 'react-router-transition';


export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			show_info:false
		};
		this.toggleInfo=this.toggleInfo.bind(this);
	}
	loadData(){

	}

  	render(){
		return(
	    	<div>
	    		<div id="_topLogo">
	    			<Link to="/about">
	    				<img src="image/logo.png" className="center"/>	    			
	    			</Link>
	    		</div>
	    		<Work className="workList"></Work>
	    	
	    	</div>
	    );
		
	}  
	toggleInfo(){
		this.setState({show_info:!this.state.show_info});
	}
	
}

