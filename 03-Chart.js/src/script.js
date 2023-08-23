
import {chart} from 'chart.js'



getData().catch((err) => console.log(err));
// Data from https://data.giss.nasa.gov/gistemp/
async function getData() {
  // const response = await fetch("test.csv");
  const response = await fetch("ZonalAnnualMeans.csv");
  // we'll use the .text method to tranform
  // the csv into txt, there are libraries available
  // that can parse csv files and do all the formatting
  // for you, D3 data driven documents, p5.js
  const data = await response.text();
  // console.log(data);

  // const rows = data.split('\n')
  // we can call the split method, and
  // split the text based on line breaks,
  // '\n' symbolizes a line break
  // could also use regex:

  const table = data.split(/\n/).slice(1);
  // and we can call .slice to slice out index 0,
  // calling slice(1) is taking everything from index
  // 1 to the end of the array, omitting index 0

  table.forEach((row) => {
    //   if ((row = row.includes("Annual", [0]))) {
    //   }
    const columns = row.split(",");
    const year = columns[(0, 1)];
    const temp = columns[(1, 2)];
    console.log(1, year, temp);
    const para = document.getElementById("para");
    para.innerText = `Year: ${columns}, Temp: ${row}`;
  });
}

export default chart