import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./assets/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(jsonData => setData(jsonData))
      .catch(error => {
        console.error('Error loading data:', error);
        setError('Failed to load data. Please try again later.');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <LineChart
        xAxis={[{ data: data.map(item => item.value) }]}
        series={[
          {
            data: data.map(item => item.y),
          },
        ]}
        height={300}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}

export default App;