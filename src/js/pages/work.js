import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import * as DConst from '../request_constants'


var cachedWorkData=null;
var cachedFilter=null;


export default class Work extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	

		//url
		this.work_url=DConst.URL+DConst.WorkPath+'?'+DConst.Token+'&status=1&sort_order=DESC&columns_show=title_en,title_ch,year,thumb_image';
		this.filter_url=DConst.URL+DConst.TypePath+'?'+DConst.Token;
		this.work_type_url=DConst.URL+DConst.WorkTypePath+'?'+DConst.Token;

		this.loadFilter=this.loadFilter.bind(this);
		this.loadWork=this.loadWork.bind(this);
		this.loadWorkTypeJunction=this.loadWorkTypeJunction.bind(this);
		

		this.createThumb=this.createThumb.bind(this);

		

	}
	componentDidMount(){
		this.loadFilter();
	}

	loadFilter(){

		console.log("load filter....");
		if(cachedFilter){
			
			this.setState({filter:cachedFilter});
			console.log("Load cached Filter!");

			this.loadWork();

		}else{
			$.ajax({
				url:this.filter_url,
				success: function(data){								

					var filter_=data.rows;
					this.setState({filter:filter_});
					cachedFilter=filter_;

					console.log("finish load filter: ");
					console.log(filter_);

					this.loadWork();

				}.bind(this),
				error: function(xhr, status, err){
					console.error(this.url, status, err.toString());
				}.bind(this)
			});
		}
	}
	loadWork(){

		console.log("load work....");

		if(cachedWorkData){
			this.setState({data:cachedWorkData});	
			console.log("Load cached work!");		
		}else{
			$.ajax({
				url:this.work_url,
				dataType:'json',
				cache:false,
				success: function(data){
					
					
					console.log("finish load work....");
					console.log(data.rows);

					this.setState({data:data.rows});
					cachedWorkData=data.rows;

					this.loadWorkTypeJunction();

				}.bind(this),
				error: function(xhr, status, err){
					console.error(this.url, status, err.toString());
				}.bind(this)
			});
		}
	}
	loadWorkTypeJunction(){

		console.log("load work type junction....");

		$.ajax({
			url:this.work_type_url,
			dataType:'json',
			cache:false,
			success: function(data){
				
				//this.setState({work_type:data.rows});

				let filter_=this.state.filter;
				let load_work=this.state.data;

				for(var work in load_work){				
					var id_=load_work[work].id;
					load_work[work].type=data.rows.filter(function(val){ return val.work==id_; })
												  .map(function(val){ return val.type; });				
				}
				
				this.setState({data:load_work});
				cachedWorkData=load_work;

				console.log("finish load work type junction....");
				console.log(load_work);

			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.url, status, err.toString());
			}.bind(this)
		});		
	}

	createThumb(work_,index_){
		var t_=[];
		if(work_.type){
			let type=this.state.filter; 
		 	t_=work_.type.map(function(tid){
								var ty_=type.find(function(val){
									return val.id==tid;
								});
								return ty_.text;
							});
		 } 

		return (<WorkNode key={work_.id} ref={work_.id}
							work={work_} index={index_} type_text={t_.join(' , ')}/>);
	}
	render(){
		var workNodes;
		if(this.state.data){
			let createThumb=this.createThumb;

			workNodes=this.state.data.map(function(work,index){
				return(
					<div key={index}>
					{createThumb(work,index)}					
					</div>
				);
			});

		}

		return(
			<div className={this.props.className}>		
				<div className="wrap" ref="_wrap">
					{workNodes}
				</div>
			</div>
		);
	}

}

class WorkNode extends React.Component{
	
	render(){
		return(
			<div className="workThumb">
			<Link to={"/work/"+this.props.work.id}>
				<img src={this.props.work.thumb_image.url}/>	
				<div className="shadow"/>
				<div className="descript">
					<div className="tag">{this.props.work.year}&nbsp;/&nbsp;{this.props.type_text}</div>
					<div className="titleEn">{this.props.work.title_en}</div>
					<div className="titleCh">{this.props.work.title_ch}</div>
				</div>
			</Link>

			</div>

		);
	}

}