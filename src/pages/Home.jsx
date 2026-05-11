import { useState } from "react";

import SearchBar from "../components/SearchBar";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="home">
      <SearchBar
        query={query}
        onQueryChange={setQuery}
      />

      <p className="home__placeholder">
        Start searching to explore
        countries.
      </p>

      {query && (
        <h2>
          You searched for: {query}
        </h2>
      )}
    </div>
  );
}

export default Home;