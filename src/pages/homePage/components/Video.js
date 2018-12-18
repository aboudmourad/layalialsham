import React from 'react'

const Video = () => {
  const style={
    border:"none",
    overflow:"hidden",

  }
  return (
    <div className="facebookVideo">
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F54alyalialsham%2Fvideos%2F1538494756191946%2F&show_text=0&width=560&height=400" 
      width="560" height="400" style={style} scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true} title="video"
      webkitallowfullscreen="true" mozallowfullscreen="true">
      </iframe>
	</div>
 
  )
}

export default Video
