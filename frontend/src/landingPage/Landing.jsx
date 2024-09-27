import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/portfolios_data.js"

const Landing = () => {
  const items=[1,2];
  const detailsPresent = localStorage.getItem("data");
  console.log(detailsPresent);
  const logged = localStorage.getItem('logged-user');
  const user = JSON.parse(logged);
  const id = user._id;
  return (
    <div className="mt-20">
      {detailsPresent!=="true"?
        <Link to="/details"><button className="btn mt-4 btn-info text-2xl underline">Your details</button></Link>:
        <Link to="/update/details"><button className="btn mt-4 btn-info text-2xl underline">Update Details</button></Link>}
      <div className="divider mx-2"></div>

      <div className='flex flex-wrap'>
          {items.map((item,index) => (<div key={index} className="cards">
          <div className="card bg-base-100 image-full w-96 shadow-xl mr-2 mb-2">
            <figure>
              <img
                src={`assets/images/preview_${item}.png`}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data[index].title}</h2>
              <p></p>{data[index].description}
              <div className="card-actions justify-end">
                
                  <a href={`/assets/templatesPortfolio/temp_${item}/index.html?id=${id}`} target='#blank'>
                  <button className="btn btn-primary">Try it!</button>
                  </a>
              </div>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Landing