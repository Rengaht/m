import React from 'react'
import Reveal from '../lib/Reveal'

export default class FadeReveal extends React.Component{
	render(){
		return(
			<Reveal effect="animated fadeInUp" {...this.props}>
				{this.props.children}
			</Reveal>
		);
	}
}