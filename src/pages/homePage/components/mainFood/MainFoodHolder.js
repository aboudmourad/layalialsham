import React from 'react'

const MainFoodHolder = (props) => {
  const value = props.value.newMainMenu
  const picName = value.picture
 console.log(value && value.description.length)
  return (
         <div className="view view-fourth" > 
                <img src={picName} alt="foodImage"/>
                    <div className="mask">
                        <h2>{value.title}</h2>
                        <p>{value.description}</p>
                    </div>
                 
        </div>
  )
}

  export default MainFoodHolder
