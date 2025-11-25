import React from "react";
import { useOutletContext } from "react-router";
import { hours, tickets } from "../data";

const HomePage = () => {
  const { activeOption, setActiveOption } = useOutletContext();

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <>
      <div className="options">
        {/* Explore */}
        <div
          className={`option explore ${
            activeOption === "explore" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("explore")}
        >
          <div className="label">
            <div className="vert-title">EXPLORE</div>
          </div>
        </div>
        {/* Visit */}
        <div
          className={`option visit ${activeOption === "visit" ? "active" : ""}`}
          onClick={() => handleOptionClick("visit")}
        >
          <div className="info">
            <div className="info-section">
              <div className="flex">
                <i class="fa-regular fa-location-dot"></i>
                <div className="address">
                  <div>100 West River Ave</div>
                  <div>San Antonio, TX 78226</div>
                </div>

                <div>
                  <div className="btn">
                    <div className="btn-text">Find Directions</div>
                  </div>
                  <div className="flex data">
                    <div className="info-section">
                      <h2>HOURS:</h2>
                      <div className="flex data">
                        <div>
                          {hours.map(({ _id, day }) => (
                            <div key={_id} className="time">
                              <span className="day">{day}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          {hours.map(({_id, startTime, endTime }) => (
                            <div key={_id} className="time">
                              <span className="hours">
                                {startTime} {endTime && `- ${endTime}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="info-section">
                      <h2>TICKETS:</h2>
                      <div className="flex data">
                        <div>
                          {tickets.map(({ _id, type }) => (
                            <div key={_id} className="ticket">
                              <span className="type">{type}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          {tickets.map(({_id, price }) => (
                            <div key={_id} className="ticket">
                              <span className="price">${price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                 
                  <div className="info-section">
                    <h2>ACCESSIBLITY</h2>
                    <p>Artworks stuff from figma</p>
                  </div>
                  <div className="info-section">
                    <small>Grab from figma</small>
                  </div>                  
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="label">
            <div className="vert-title">VISIT</div>
          </div>
        </div>
        {/* Community */}
        <div
          className={`option community ${
            activeOption === "community" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("community")}
        >
          <div className="label">
            <div className="vert-title">COMMUNITY</div>
          </div>
        </div>
        {/* Contact */}
        <div
          className={`option contact ${
            activeOption === "contact" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("contact")}
        >
          <div className="label">
            <div className="vert-title">CONTACT</div>
          </div>
        </div>
    </>
  );
};

export default HomePage;
