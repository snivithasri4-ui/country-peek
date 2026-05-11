function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="card__flag"
      />

      <div className="card__body">
        <h3 className="card__name">
          {country.name.common}
        </h3>

        <p>
          <span>Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <p>
          <span>Region:</span>{" "}
          {country.region}
        </p>

        <p>
          <span>Capital:</span>{" "}
          {country.capital?.[0] ?? "N/A"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;