import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Work from './work'

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


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
	    	<ReactCSSTransitionGroup transitionName="sub_page"
						transitionAppear={true}
						transitionEnter={true}
						transitionLeave={true}
						transitionAppearTimeout={1000}
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={1000}>
					{React.cloneElement(this.props.children,{key:this.props.location.pathname})}	    			
	    	</ReactCSSTransitionGroup>
	    );
		
	}  
	toggleInfo(){
		this.setState({show_info:!this.state.show_info});
	}
	
}

