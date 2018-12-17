import React from 'react'
import TestInfoRight from './TestInfoHolder/TestInfoRight';
import TestInfoLeft from './TestInfoHolder/TestInfoLeft';

const testInfo = (props) => {
   const pathname = props.pathname
    const info = props.value
    if(props.index %2 ===0){
  return <TestInfoRight info={info} deleteHandler={props.deleteHandler} pathname={pathname}/>
   } else {
      return <TestInfoLeft info={info} deleteHandler={props.deleteHandler} pathname={pathname}/> 
  }
}

export default testInfo
