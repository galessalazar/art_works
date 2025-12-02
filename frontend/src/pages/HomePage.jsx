import React from "react";
import { useOutletContext } from "react-router";
import { hours, tickets, events } from "../data";

const HomePage = () => {
  const { activeOption, setActiveOption } = useOutletContext();

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  // Get next 4 upcoming events
  const getUpcomingEvents = () => {
    const today = new Date();

    return (
      events
        // Filter to only show future events

        .filter((event) => new Date(event.date) >= today)
          // Sort by most current event

        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3)
    );
  };

  const upcomingEvents = getUpcomingEvents();



  // Get first 4 events

  return (
    <>
      <div className="options">
        {/* Explore */}
        <div
          className={`option home ${activeOption === "home" ? "active" : ""}`}
          onClick={() => handleOptionClick("home")}
        >
          <div className="label">
            <div className="vert-title">EXPLORE</div>
          </div>
        </div>

        {/* VISIT */}
        <div
          className={`option visit ${activeOption === "visit" ? "active" : ""}`}
          onClick={() => handleOptionClick("visit")}
        >
          <div className="info">
            <div className="flex">
              <div className="info-section">
                <h2>HOURS:</h2>
                <div>
                  {hours.map(({ _id, day, startTime, endTime }) => (
                    <div key={_id} className="flex">
                      <p>{day}</p>
                      <p>
                        {startTime} {endTime && `- ${endTime}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-section">
                <h2>Tickets:</h2>
                <div>
                  {tickets.map(({ _id, type, price }) => (
                    <div key={_id} className="flex">
                      <p>{type}</p>
                      <p>${price}</p>
                    </div>
                  ))}
                </div>
                <div className="btn mt-1">
                  <div className="btn-text">Buy Tickets</div>
                </div>
              </div>
            </div>
            <div className="info-section">
              <h2>Accessibility</h2>
              <p>
                ArtWorks offers the use of elevators, wheelchairs, audio
                devices, and free guided tours for certain needs. Service
                animals are welcome.
              </p>
              <p>Please contact us with additional accessibility questions.</p>
            </div>
            <div className="info-section">
              <small>
                View our full list of FAQs & tips on How To Be A Good Visitor
              </small>
            </div>
          </div>

          <div className="label">
            <div className="vert-title">VISIT</div>
          </div>
        </div>
        {/* COMMUNITY */}
        <div
          className={`option community ${
            activeOption === "community" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("community")}
        >

          <div className="info">
            <div className="info-section">
              <h2>Upcoming Community Events</h2>
              <div>
                {upcomingEvents.map(({_id, date, title})=> (
                  <div key={_id} className="flex">
                    <p>
                      {(() => {
                        const d = new Date(date);
                        return `${
                          d.getMonth() + 1
                        }.${d.getDate()}.${d.getFullYear()}`;
                      })()}
                    </p>
                    <p>{title}</p>
                  </div>
                ))}
              </div>
                  <div className="btn red">
                    <div className="btn-text">Reserve Your Spot</div>
                  </div>
            </div>
          </div>
          <div className="label">
            <div className="vert-title">COMMUNITY</div>
          </div>
        </div>
        {/* CONTACT */}
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
