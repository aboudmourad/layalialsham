import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
	const style={
		width:50+"px",
		height:50+"px"
	}
  return (
   	<div className="footer-section">
		<div className="container">
			<div className="footer-top wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
				<div className="social-icons">
					<i>	<SocialIcon url="https://www.facebook.com/54alyalialsham/" style={style} target="_blank" rel="noopener noreferrer"/></i>
					<i><SocialIcon url="https://www.instagram.com/layali_al_sham1/" style={style} target="_blank" rel="noopener noreferrer"color="#bc2a8d"/></i>
					<i><SocialIcon url="https://layali-alsham.business.site/" style={style} target="_blank" rel="noopener noreferrer"color="red"/></i>
				</div>
			</div>
			<div className="footer-bottom">
				<p> Copyright &copy;2018  All rights  Reserved | Made by<a href="http://www.codematrix.nl" target="target_blank">Code Matrix</a></p>
			</div>
				<a className="scroll" href="#header" id="toTop" style={{display: "block"}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
		</div>
	</div>
  )
}

export default Footer
