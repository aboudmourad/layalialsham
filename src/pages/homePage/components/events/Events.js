import React from 'react'
import { connect } from "react-redux"
import EventsHolder from './EventsHolder';

const Events = (props) => {
	const eventsInfo = props.event
    const info = eventsInfo.map((value,index)=>{
        let left="right", one="1"
        if(index ===0){ left = "left"; one = "" }
        return <EventsHolder value={value} left={left} one={one} key={index}/>
    })
  return (
   				 <div className="events-section">
						<div className="container">
							<h3>our events</h3>
							<div className="event-grids  wow bounceInRight animated" data-wow-delay="0.4s" id="mainFood">
									{info}
							</div>
							{/* <div className="butt"> */}
							{/* <a href="event.html" className="button2">veiw all events</a> */}
							{/* </div> */}
						</div>
				</div>
  )
}
const mapStateToProps=(state)=>{
    return {
		event:state.event.EventsInfo
	}
}
export default connect(mapStateToProps)(Events)
