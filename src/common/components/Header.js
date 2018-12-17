import React from 'react'
import Banner from "./Banner"
import HeaderButtom from './HeaderButtom';
const Header = () => {
  return (
    <div>
      <Banner class="header-banner" id="head"/>
      <HeaderButtom/>
    </div>
  )
}

export default Header
