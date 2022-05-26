import React from 'react';
import './portfolioList.scss';

export default function PorfolioList({title,id,active,setSelected}) {
  return (
        <li className= {active?"portfolio active" : "portfolio"} onClick = {()=>setSelected(id)}>
            {title}
        </li>
  )
}
