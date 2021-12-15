import React, { Component } from "react";
import data from "../../data/data.json";
import "./cardpage.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from 'react-loading-skeleton';

class Card extends Component {
  render() {
    return (
      <div className="feed-page skeleton">
        <body>
          <section>
            <InfiniteScroll
              dataLength={data.length}
              hasMore={true}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
       
              {data.map((d) => (
                <div className="card-container skeleton">
                  <div className="card-icon">
                    <img src={d.icons} alt="" />
                  </div>
                  <div className="card-title">
                    <h1>{d.title}</h1>
                  </div>
                  <div className="card-content">
                    {/* description */}
                    <div className="card-body">
                      <h2 className="description">{d.description}
                      </h2>
                    </div>
                    <div className="card-creator">
                      <h4 className="creator">Publisher: {d.creator}</h4>
                    </div>

                    {/* Time */}
                    <div className="card-time">
                      <h3 className="time"> {d.datetime}</h3>
                    </div>
                    {/* Image */}
                    <div className="image-container skeleton">
                      <img src={d.image} alt="" />
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <a href={d.link}>View More!</a>
                    </button>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </section>
        </body>
      </div>
    );
  }
}

export default Card;
