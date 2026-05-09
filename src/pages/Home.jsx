import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'

function Home() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (query.trim() === '') {
      setCountries([])
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [query])

  return (
    <div className="home">
      <SearchBar
        query={query}
        onQueryChange={setQuery}
      />

      <div className="countries-container">
        {countries.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              width="150"
            />

            <h2>{country.name.common}</h2>

            <p>
              <strong>Population:</strong>{' '}
              {country.population.toLocaleString()}
            </p>

            <p>
              <strong>Region:</strong> {country.region}
            </p>

            <p>
              <strong>Capital:</strong>{' '}
              {country.capital?.[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home