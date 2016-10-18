
import React from 'react'
import {Link} from 'react-router'
import * as DConst from '../request_constants'


export default class AWork extends React.Component{

	constructor(props){
		super(props);			
		this.state={};
		this.loadData(this.props.params.id);		
	}
	loadData(id_){
		
		// let url=DConst.URL+DConst.WorkPath+'/'+id_+'?'+DConst.Token;	
		let url='data/data.json';	
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
	componentWillMount(){
        
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
					<div className="aworkTitle">
						<div className="english">{this.state.work.title_en}</div>
						<div>{this.state.work.title_ch}</div>
						<div>#{this.state.work.year}{this.state.tag_list}</div>		
						<Link to="/">
							<img src="image/x.png" className="workClose"/>
						</Link>				
					</div>
					<div className="AWorkVideo" dangerouslySetInnerHTML={{__html:this.state.work.video.html}}/>			
					{imageNodes}
				</div>							
			);
		}else{
			return <div/>;
		}
	}	
	
}



