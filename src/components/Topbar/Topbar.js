import React from 'react'
import "./Topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({manuOpen,setManuOpen}) {
  return (
    <div className={"topbar " +  (manuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className='logo' >Portfolio</a>
          <div className="iconItems">
            <PersonIcon className='icon' />
            <span>+91 7000642267</span>
          </div>
          <div className="iconItems">
            <EmailIcon className='icon' />
            <span>jaythakur345@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{setManuOpen(!manuOpen)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
