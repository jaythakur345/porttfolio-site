import React, { useEffect, useState } from 'react';
import PorfolioList from '../portfolioList/PorfolioList';
import "./Portfolio.scss";
import {
  feature,
  web,
  mobile,
  design
} from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState("feature");
  const [data, setData] = useState([]);
  const listItem = [
    {
      id: "feature",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "feature":
        setData(feature);
        break;
      case "web":
        setData(web);
        break;
      case "mobile":
        setData(mobile);
        break;
      case "design":
        setData(design);
        break;

      default:
        setData(feature);
        break;
    }

  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {listItem.map((item) => {
          return <PorfolioList title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected} />
        })}
      </ul>

      <div className="imgContainer">
        {data.map((d) => (
          <div className="imgItem">
            <img src={d.img} alt="Laptop Img" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
