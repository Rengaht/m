
import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import * as DConst from '../request_constants'


export default class AWork extends React.Component{

	constructor(props){
		super(props);			
		this.state={};
		this.loadData(this.props.params.id);		

	}
	loadData(id_){
		
		let url=DConst.URL+DConst.WorkPath+'/'+id_+'?'+DConst.Token;	
		// let url='data/data.json';	
		$.ajax({
			url:url,
			dataType:'json',
			cache:false,
			success: function(data){		

				let tag_=(data.type)?data.type.rows.map(function(obj){
					return '#'+obj.data.text;
				}):[];
				tag_=tag_.join(' ');

				this.setState({work:data,key:data.id,tag_list:tag_});				
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.url, status, err.toString());
			}.bind(this)
		});

	}

	render(){
		if(this.state.work){

			var imageNodes=this.state.work.image.rows.map(function(img){
					return(
						<img key={img.id} src={DConst.FilePath+img.data.name}/>
					);
			});

			return(			
				<div className="aWork" key={this.state.work.id}>
					<div className="wrap">
						<div className="aworkTitle">
							<div className="english" data-text={this.state.work.title_en}>{this.state.work.title_en}</div>
							<div>{this.state.work.title_ch}</div>
							<div>#{this.state.work.year}{this.state.tag_list}</div>		
							<Link to="/">
								<img src="image/x.png" className="workClose"/>
							</Link>				
						</div>
						<WorkVideo src={this.state.work.video}/>			
						{imageNodes}
					</div>
				</div>							
			);
		}else{
			return <div/>;
		}
	}	
	// show(id_){
	// 	this.loadData(id_);
	// 	ReactDOM.findDOMNode(this).classList.add('show');
	// }
	// close(){
	// 	ReactDOM.findDOMNode(this).classList.remove('show');
	// }
}



class WorkVideo extends React.Component{
	render(){

		if(this.props.src.type.includes("embed"))
			return(
				<div className="AWorkVideo" dangerouslySetInnerHTML={{__html:this.props.src.html}}>			
				</div>
			);
		else return <div/>;
		// else if(this.props.src.type.includes("image"))
		// 	return(
		// 		<div className="AWorkVideo">			
		// 			<img src={this.props.src.url}/>
		// 		</div>
		// 	);
	}
}


