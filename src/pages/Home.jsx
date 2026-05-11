import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");

  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      setCountries([]);
      setError("");
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);

      fetch(
        `https://restcountries.com/v3.1/name/${query}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "No countries found"
            );
          }

          return response.json();
        })
        .then((data) => {
          setCountries(data);
          setError("");
        })
        .catch((error) => {
          setCountries([]);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="home">
      <SearchBar
        query={query}
        onQueryChange={setQuery}
      />

      {loading && (
        <h2 className="home__status">
          Loading...
        </h2>
      )}

      {error && (
        <h2 className="home__status home__status--error">
          {error}
        </h2>
      )}

      <div className="cards-grid">
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;