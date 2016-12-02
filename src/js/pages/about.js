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
					“梅林的鬍子啊！”我們時常讚嘆：想像力沒有極限。我們想要透過科技，放大廣告世界的想像力，翻新說故事的方法，開發人類感官尚未觸及的領域！
現在就跟著我們一起「梅林的鬍子」吧！
					</div>
					<div className="infoEnglish">
					“Oh Merlin’s beard!” -  is how we praise the infinite imagination.<br/>
We aim to amplify imagination for advertising, revitalize storytelling, and explore the unexplored human senses. 
<br/><br/>
Let’s “Wow” together!</div>
					<div className="contactInfo">
						<div>
							<span>T</span>
							<a href="tel:+886-2-2718-1133#135">
							<span>+886-2-2718-1133 #135</span>
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
							<a href="http://maps.google.com/?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E6%9D%BE%E5%B1%B1%E5%8D%80%E5%8D%97%E4%BA%AC%E6%9D%B1%E8%B7%AF%E4%B8%89%E6%AE%B5275%E8%99%9F12%E6%A8%93">
							<span>10550 台北市松山區南京東路三段275號12樓</span>
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