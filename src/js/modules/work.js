import React from 'react'
import {Link} from 'react-router'
import * as DConst from '../request_constants'

export default class Work extends React.Component{
	constructor(props){
		super(props);
		this.state={};

		this.loadData=this.loadData.bind(this);
		this.loadData();
	}
	loadData(){
		// let work_url=DConst.URL+DConst.WorkPath+'?'+DConst.Token+'&status=1&sort_order=DESC&columns_show=m_thumb_image';
		let work_url='data/work.json';
		$.ajax({
			url:work_url,
			dataType:'json',
			cache:false,
			success: function(data){				
				console.log('data loaded!');
				this.setState({data:data.rows});				
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.url, status, err.toString());
			}.bind(this)
		});

	}

	render(){
		var workNodes;
		if(this.state.data){
			workNodes=this.state.data.map(function(work){
				return(
					<WorkNode key={work.id} work={work} index={work.id}/>
				);
			});

		}

		return(
			<div className={this.props.className}>		
				{workNodes}
			</div>
		);
	}

}

class WorkNode extends React.Component{
	
	render(){
		return(
			<div className={this.props.index%2==1?"workThumb left":"workThumb"}>
			<Link to={"/work/"+this.props.work.id}>
				<img src={DConst.FilePath+this.props.work.m_thumb_image.name}/>				
			</Link>
			</div>

		);
	}

}