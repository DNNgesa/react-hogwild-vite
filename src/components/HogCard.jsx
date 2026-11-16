import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleCardClick() {
    setShowDetails((prevShow) => !prevShow);
  }

  function handleHideClick(e) {
    e.stopPropagation();
    onHideHog(hog.name);
  }

  return (
    <div className="ui eight wide column">
      <div
        aria-label="hog card"
        className="ui card centered"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <div className="image">
          <img
            src={hog.image || "https://placeholder.com"}
            alt={"Photo of " + hog.name}
            style={{ height: "220px", objectFit: "cover" }}
          />
        </div>

        <div className="content">
          <h3 className="header">{hog.name}</h3>

          {showDetails && (
            <div className="description" style={{ marginTop: "10px" }}>
              <p>Specialty: {hog.specialty}</p>
              <p>{hog.weight}</p>
              <p>{hog.greased ? "Greased" : "Nongreased"}</p>
              <p className="achievementText">
                {hog["highest medal achieved"]}
              </p>
            </div>
          )}
        </div>

        <div className="extra content">
          <button className="ui button" onClick={handleHideClick}>
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;
