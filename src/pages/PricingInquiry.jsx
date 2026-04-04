import React, { useState, useEffect } from 'react';

function PricingInquiry() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    // Fetch the list of countries from your Express.js server
    fetch('http://localhost:4000/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    if (selectedCountry) {
      // Fetch the pricing data for the selected country
      fetch(`http://localhost:4000/pricing/${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => setSelectedPrice(data.price))
        .catch((error) => console.error(error));
    }
  }, [selectedCountry]);

  return (
    <div>
      <h2>Dynamic Pricing Section</h2>
      <label>Select a country: </label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country._id} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <p>Selected Country: {selectedCountry}</p>
          {selectedPrice !== null ? (
            <p>Price:{selectedPrice}</p>
          ) : (
            <p>Price not found for the selected country</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PricingInquiry;
