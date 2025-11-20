import React from "react";
import { useOutletContext } from "react-router";
import { hours } from "../data";

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
          <div className="info" style={{ marginTop: "150px" }}>
            <div className="info-section">
              <i class="fa-regular fa-location-dot"></i>
            </div>
            <div>100 West River Ave</div>
            <div>San Antonio, TX 78226</div>
          </div>
          <div>
            <div className="btn">
              <div className="btn-text">View All Exhibits</div>
            </div>

            <div className="info-section">
              <h2>HOURS:</h2>
              {hours.map(({ _id, day, startTime, endTime }) => (
                // have to provide a key with map on outer most call
                <div key={_id} className="schedule">
                  <span className="day"> {day}</span>
                  <span className="hours">
                    {startTime} {endTime && `- ${endTime}`}
                  </span>
                </div>
              ))}
            </div>
            <div className="info-section">
              <h2>ACCESSIBLITY</h2>
              <p>Artworks stuff from figma</p>
            </div>
            <div className="info-section">
              <small>Grab from figma</small>
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
      </div>
    </>
  );
};

export default HomePage;
