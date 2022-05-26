import React from 'react'
import "./manu.scss";

export default function Manu({manuOpen,setManuOpen}) {
  return (
    <div className={"manu " + (manuOpen && "active")}>
        <ul>
            <li><a href = "#intro" onClick={()=>{setManuOpen(false)}}>Home</a></li>
            <li><a href = "#portfolio" onClick={()=>{setManuOpen(false)}}>Portfolio</a></li>
            <li><a href = "#testimonial" onClick={()=>{setManuOpen(false)}}>Testimonial</a></li>
            <li><a href = "#work" onClick={()=>{setManuOpen(false)}}>Work</a></li>
            <li><a href = "#contact" onClick={()=>{setManuOpen(false)}}>Contact</a></li>
        </ul>
    </div>
  )
}
