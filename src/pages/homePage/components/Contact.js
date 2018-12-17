import React from 'react'

const Contact = () => {
  return (
        <div className="contact-section">
			<div className="container">
					<h3>contact us</h3>
                    <form action="https://formspree.io/code.matrix.zone@gmail.com" method="POST">
                        <div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
                            <div className="col-md-4 contactgrid">
                                <input type="text" name="name" className="text"
                                    placeholder="name"/>
                            </div>
                            <div className="col-md-4 contactgrid">
                                <input type="text" name="email"className="text" placeholder="Email"/>
                            </div>
                            <div className="col-md-4 contactgrid">
                                <input type="text" name="number" className="text" placeholder="Phone"/>
                            </div>
                            <div className="col-md-8 contactgrid1">
                                <textarea name="text" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-md-4 contactgrid2">
                                <button type="submit">SEND MESSAGE</button>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                     </form>
			</div>
		</div>
  )
}

export default Contact
