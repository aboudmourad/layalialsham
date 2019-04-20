import React from 'react'

const MenuHolder = (props) => {
  const x = props.x.newMenu;
  const picName=props.x.newMenu.picture;
 
return (
   <div className="col-md-3 menu-grid" >
       <img src={picName} className="img-responsive" id="menu" alt="" />
           <div className="menu-info">
                <h4>{x && x.price}.<sup>99</sup></h4>
                   <h5>{x && x.title}.</h5>
          </div>
    </div>
)
}


export default MenuHolder


