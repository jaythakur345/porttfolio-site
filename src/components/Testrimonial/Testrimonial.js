import React from 'react';
import './testrimonial.scss';

export default function Testrimonial() {

  const data = [
    {
      id: 1,
      title: "Piyush Jain",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nesciunt.",
      img: "Asset/man1.jpg"
    },
    {
      id: 2,
      title: "Harshit Pandey",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nesciunt.",
      img: "Asset/man2.jpg"
    },
    {
      id: 3,
      title: "Vishal Thakur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nesciunt.",
      img: "Asset/man3.jpg"
    },
  ]
  return (
    <div className='testimonial' id='testimonial'>
      <div className="container text-center">
        <h1>Testimonial</h1>
        <div className="container">
          <div className="row">
            {data.map((d) => (
              <div className="col-md-4">
                <div class="card my-3" style={{ width: "18rem" }}>
                  <img src={d.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{d.title}</h5>
                    <p class="card-text"><q>{d.desc}</q></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
