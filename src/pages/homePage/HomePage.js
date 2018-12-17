import React from 'react'
import Service from './components/Service';
import Video from './components/Video';
import MainFood from './components/mainFood/MainFood';
import Menu from './components/menu/Menu';
import Events from './components/events/Events';
import Testimonials from './components/testimonial/Testimonials';
import GoogleMap from './components/GoogleMap';
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <div>
      
      <Service/>

      <Video/>

      <MainFood/>

      <Menu/>

      <Events/>

      <Testimonials/>

      <GoogleMap/>

      <Contact/>

    </div>
  )
}

export default HomePage
