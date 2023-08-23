import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

window.addEventListener('load', setup);
console.log(12314)
      async function setup() {
        const ctx = document.getElementById('chart').getContext('2d');
        const globalTemps = await getData();
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: globalTemps.years,
            datasets: [
              {
                label: 'Temperature in °C',
                data: globalTemps.temps,
                fill: true,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                pointBorderColor: 'rgb(255, 165,0)'
              }
            ]
          },
          options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return  value + '°';
                        }
                    }
                }
            }
        }
          
        });
      }

      async function getData() {
        // const response = await fetch('testdata.csv');
        const response = await fetch('./next.csv');
        const data = await response.text();
        const years = [];
        const temps = [];
        const rows = data.split('\n').slice(1);
        rows.forEach(row => {
          const cols = row.split(',');
          years.push(cols[0]);
          temps.push(14 + parseFloat(cols[1]));
        });
        return { years, temps };
      }

      export default {Chart, setup, getData}