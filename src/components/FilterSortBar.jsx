import React from "react";

function FilterSortBar({
  greasedOnly,
  onGreasedChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="filterWrapper ui form">
      <div className="inline fields" style={{ justifyContent: "center", gap: "2rem" }}>
        <div className="field">
          <div className="ui checkbox">
            <input
              id="greased-filter"
              type="checkbox"
              checked={greasedOnly}
              onChange={(e) => onGreasedChange(e.target.checked)}
            />
            <label htmlFor="greased-filter">Greased Pigs Only?</label>
          </div>
        </div>

        <div className="field">
          <label htmlFor="sort-select" style={{ marginRight: "0.5rem" }}>
            Sort by:
          </label>
          <select
            id="sort-select"
            className="ui dropdown"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="all">Default</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSortBar;
