import React from 'react'
import "./Quentaty.css"

 const Quentaty:React.FC<any> =() =>{
  return (
    <div className='quantityback' >
        <div   className='quantityadd'>
<h1>+</h1>
        </div>
        
        <div className='quantity'><h1>0</h1></div>
        <div className='quantitysubtract'><h1>-</h1></div>
    </div>
  )
}

export default Quentaty
