import React, { useState, useEffect } from 'react';

function App() {
  const [generationData, setGenerationData] = useState([]);
  const [consumptionData, setConsumptionData] = useState([]);

  useEffect(() => {
    // Fetch Generation Data
    fetch('https://dss-461.azurewebsites.net/generation')
      .then(response => response.json())
      .then(data => setGenerationData(data))
      .catch(error => console.error('Error fetching generation data:', error));

    // Fetch Consumption Data
    fetch('https://dss-461.azurewebsites.net/consumption')
      .then(response => response.json())
      .then(data => setConsumptionData(data))
      .catch(error => console.error('Error fetching consumption data:', error));
  }, []);

  return (
    <div>
      <h1>Energy Data</h1>
      <h2>Generation Data</h2>
      <ul>
        {generationData.map((item, index) => (
          <li key={index}>
            Year: {item.Year}, Month: {item.Month}, State: {item.State}, 
            ProducerType: {item.ProducerType}, EnergySource: {item.EnergySource}, 
            Generation: {item.Generation}
          </li>
        ))}
      </ul>

      <h2>Consumption Data</h2>
      <ul>
        {consumptionData.map((item, index) => (
          <li key={index}>
            Year: {item.Year}, Hydroelectric: {item.Hydroelectric}, Geothermal: {item.Geothermal}, 
            Solar: {item.Solar}, Wind: {item.Wind}, Wood: {item.Wood}, Waste: {item.Waste}, 
            Biofuels: {item.Biofuels}, TotalBiomass: {item.TotalBiomass}, 
            TotalRenewable: {item.TotalRenewable}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
