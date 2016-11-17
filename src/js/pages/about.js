import React from 'react'
import {Link} from 'react-router'

export default class About extends React.Component{

	render(){
		return(
			<div className="info">
				<div className="infoWrap">
					<div className="logoWrap">
						<div className="name" data-text="Merlin's Mustache Lab">Merlin's Mustache Lab</div>
					</div>
					<div className="infoChinese">
					梅林鬍子實驗室相信數位科技是現代世界的魔法。透過科技法術與心靈咒語，創造觸動人心的未來科學。跟著我們一起「梅林的鬍子」吧!    	     	
					</div>
					<div className="infoEnglish">
					Merlin’s Mustache Lab believes digital technology is the magic of modern real world. Through the wizards of technology and spells of spiritual mind, it creates future emotive science.
	        Follow us to scream "Merlin's Mustache".
					</div>
					<div className="contactInfo">
						<div>
							<span>T</span>
							<a href="tel:+886-2-8768-1100#135">
							<span>+886-2-8768-1100#135</span>
							</a>
						</div>
						<div>
							<span>E</span>
							<a href="mailto:merlin.mustache@mmlab.tw">
							<span>merlin.mustache@mmlab.tw</span>
							</a>
						</div>
						<div>
							<span>A</span>
							<a href="http://maps.google.com/?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E6%9D%B1%E8%88%88%E8%B7%AF45%E8%99%9F9F">
							<span>11070 台北市信義區東興路45號9F</span>
							</a>
						</div>
					</div>
					<div className="socialLink">
						<a href="https://vimeo.com/merlinsmustache" target="_blank">
	     					<img src="image/vimeo.png"/>
	     				</a>
	     				<a href="https://www.facebook.com/merlin.mustache/" target="_blank">
	     					<img src="image/facebook.png"/>
	     				</a>
	     				<a href="https://www.youtube.com/channel/UCSIxHgMr4UvZRsG5hWoVolQ" target="_blank">
	     					<img src="image/youtube.png"/>
	     				</a>
					</div>									
				</div>
				<div className="closeInfo">
					<Link to="/">
						<img className="center" src="image/up.png"/>										
					</Link>
				</div>
			</div>
		);
	}


}