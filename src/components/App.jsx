import React, { useState } from "react";
import Nav from "./Nav";
import FilterSortBar from "./FilterSortBar";
import NewHogForm from "./NewHogForm";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("all");

  function handleHideHog(hogName) {
    setHiddenHogs((prevHidden) => [...prevHidden, hogName]);
  }

  function handleAddHog(newHog) {
    setHogList((prevHogs) => [...prevHogs, newHog]);
  }

  const filteredHogs = hogList.filter((hog) => {
    if (hiddenHogs.includes(hog.name)) return false;
    if (greasedOnly && !hog.greased) return false;
    return true;
  });

  const displayedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="App">
      <Nav />
      <FilterSortBar
        greasedOnly={greasedOnly}
        onGreasedChange={setGreasedOnly}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <NewHogForm onAddHog={handleAddHog} />
      <HogList hogs={displayedHogs} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;
