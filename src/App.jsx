import React from "react";
import { LineChart} from "@mui/x-charts/LineChart"
import data from "./assets/data.json"
function App() {
  return (
    <div>
      <LineChart
        xAxis={[{ data:[0.44, 116,202,378,466  ,554,642,730,818,906,995, 1097,1215,1333,1451,1569,1687] }]}
        series={[
          {
            data: [7, 7.5, 8, 8.5, 6.5, 3, 3,2, 3.5, 3, 5, 5.5,6, 6.5, 8.5, 5, 7],
          },
        ]}
        height={500}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}

export default App;
