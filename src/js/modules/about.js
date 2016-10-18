import React from 'react'

export default class About extends React.Component{

	render(){
		return(
			<div className={this.props.className}>
				<div className="infoWrap">
					<div className="logoName">Merlin's Mustache Lab</div>
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
							<span>+886-2-8768-1100#135</span>
						</div>
						<div>
							<span>E</span>
							<span>merlin.mustache@mmlab.tw</span>
						</div>
						<div>
							<span>A</span>
							<span>11070 台北市信義區東興路45號9F</span>
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
				<div className="closeInfo" onClick={this.props.closeInfo}>
					<img className="center" src="image/up.png"/>										
				</div>
			</div>
		);
	}


}