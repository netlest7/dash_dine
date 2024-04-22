import React from 'react'
import Back from '@/components/Back'
import FZ from "../../resorce/FZF.png"
import { relative } from 'path'

export default function FZF() {
  return (
    <Back>
      <div 
      style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
      >
       <div
       style={
        {
          display:"flex",
          flexDirection:"column"
          , width: "100%", height: "100%" 
        }
       }
       >
       <h1 style={
        {
          fontSize:"40px",
          width:"100%"
          ,textAlign:"center",
          fontWeight:"bold",
          position:"relative",
 
  marginTop:"50%"
        }
       } >404 Page Not Found</h1>
<img style={{
  position:"relative",
  top:"200%",
  marginTop:"50%"
}} src={FZ} alt="" />
       </div>
      </div>
    </Back>
  )
}
