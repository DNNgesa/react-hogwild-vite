import React, { useState } from "react";

function NewHogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("wood");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      name: name,
      weight: parseFloat(weight) || 0,
      specialty: specialty,
      greased: greased,
      "highest medal achieved": medal,
      image:
        image ||
        "https://githubusercontent.com",
    };

    onAddHog(newHog);

    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
    setMedal("wood");
    setImage("");
  }

  return (
    <div className="ui segment" style={{ maxWidth: "700px", margin: "1.5rem auto" }}>
      <h4>Add a New Hog</h4>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label htmlFor="hog-name">Name:</label>
            <input
              id="hog-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="hog-weight">Weight:</label>
            <input
              id="hog-weight"
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="two fields">
          <div className="field">
            <label htmlFor="hog-specialty">Specialty:</label>
            <input
              id="hog-specialty"
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="hog-medal">Highest Medal Achieved:</label>
            <select
              id="hog-medal"
              value={medal}
              onChange={(e) => setMedal(e.target.value)}
            >
              <option value="wood">Wood</option>
              <option value="bronze">Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
              <option value="diamond">Diamond</option>
            </select>
          </div>
        </div>

        <div className="two fields" style={{ alignItems: "center" }}>
          <div className="field">
            <label htmlFor="hog-image">Image URL:</label>
            <input
              id="hog-image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="field">
            <div className="ui checkbox" style={{ marginTop: "1.2rem" }}>
              <input
                id="hog-greased"
                type="checkbox"
                checked={greased}
                onChange={(e) => setGreased(e.target.checked)}
              />
              <label htmlFor="hog-greased">Greased?</label>
            </div>
          </div>
        </div>

        <button type="submit" className="ui primary button">
          Add Hog
        </button>
      </form>
    </div>
  );
}

export default NewHogForm;
