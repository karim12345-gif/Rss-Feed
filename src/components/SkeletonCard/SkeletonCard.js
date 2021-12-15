import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import data from '../../data/data.json'



const SkeletonCard = () => {
  return (
    <section>
      <ul className="list" cols={8} >
        {Array(16)
          .fill()
          .map((index) => (
            <li className="card" key={index}
            style={{
              marginRight: '80rem',
              width: "280px",
              height: "450px",
              margin: "10px 70px ",
              justifyContent:'space-between',
              boxShadow: "0px 0px 15px -5px",
              padding:'10px',
              borderRadius: "25px",
              cursor:'pointer',
              display: "block", 
              float:"left",
              padding:"10px",
            }}
             >
              <h4 className="card-icon"> 
              <Skeleton variant="circular" width={40} height={40}  style={{
                       marginRight: '14rem',
              }}  />
              </h4>
              <p className="card-title">
                <Skeleton width={200} count={1}  />
              </p>
              <p className="card-description">
                 <Skeleton count={4} width={180} /> 
              </p>
              <p className="card-creator">
                <Skeleton width={120} />
              </p>
              <p className="card-time">
                <Skeleton width={250} />
              </p>
              <div className="card-image">
                <Skeleton variant="circular" width={200} height={90} style={{
                  borderRadius:'25px'
                }} />
              </div>
              <br>
              </br>
              <div className="card-button">
                 <Skeleton width={80} height={20} /> 
              </div>
              
            </li>
          ))}
      </ul>

    </section>
  );
};

export default SkeletonCard;
