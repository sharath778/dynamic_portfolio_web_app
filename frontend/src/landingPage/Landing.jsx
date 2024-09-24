import React from 'react';
import { Link } from 'react-router-dom';
import previewImage from "../../public/assets/images/preview.png";

const Landing = () => {
  const detailsPresent = localStorage.getItem("data");
  console.log(detailsPresent);

  return (
    <div className="mt-20">
      {detailsPresent!=="true"?
        <Link to="/details"><button className="btn mt-4 btn-info text-2xl underline">Your details</button></Link>:
        <Link to="/update/details"><button className="btn mt-4 btn-info text-2xl underline">Update Details</button></Link>}
      <div className="divider mx-2"></div>
      <div className="cards">
         <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src={previewImage}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Malon Portfolio!</h2>
            <p>Passionate developer creating elegant web solutions at beginning.</p>
            <div className="card-actions justify-end">
              
                <a href={"/assets/templatesPortfolio/temp_1/index.html"} target='#blank'>
                <button className="btn btn-primary">Try it!</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing