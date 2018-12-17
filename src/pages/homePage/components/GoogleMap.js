import React from 'react'

const GoogleMap = () => {
  const googleMap=<div className="google" id="location">
                    <iframe   id="gmap_canvas" title="video"
                      src="https://maps.google.com/maps?q=layali%20alsham&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
  return googleMap;
}

export default GoogleMap


