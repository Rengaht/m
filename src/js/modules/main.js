import React from 'react'
import ReactDOM from 'react-dom'
import About from './about'
import Work from './work'

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
	    		<div id="_topLogo"  onClick={this.toggleInfo}>
	    			<img src="image/logo.png" className="center"/>	    			
	    		</div>
	    		<About className={this.state.show_info?"info show":"info"} closeInfo={this.toggleInfo}/>
	    		<Work className={this.state.show_info?"workList hide":"workList"}></Work>
	    	</div>
	    );
		
	}  
	toggleInfo(){
		this.setState({show_info:!this.state.show_info});
	}
	
}

