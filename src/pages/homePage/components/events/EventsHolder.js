import React from 'react'

const EventsHolder = (props) => {
    const value= props.value, one = props.one, left=props.left
  return (
            <div className={`col-md-6 event-left${left}`}>
				<div className="even-info">
					<div className={`icon${one}`}>
						<img src={value.image} className="" alt="" />
					</div>
					<div className={`event-info${one}`}>
						<h4>{value.title} </h4>
						<p>{value.description} </p>
					</div>
					    <div className="clearfix"> </div>
			    </div>
            </div>
  )
}

export default EventsHolder
