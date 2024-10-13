// Crypto Chart (XLM Price)
const cryptoCtx = document.getElementById('cryptoChart').getContext('2d');
const cryptoChart = new Chart(cryptoCtx, {
  type: 'line',
  data: {
    labels: ['12:00', '12:15', '12:30', '12:45', '1:00', '1:15', '1:30'],
    datasets: [{
      label: 'XLM Price',
      data: [0.090, 0.091, 0.092, 0.093, 0.094, 0.092, 0.092],
      borderColor: '#f89420',
      backgroundColor: 'rgba(248, 148, 32, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: false
      }
    }
  }
});

// Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Books Sold',
      data: [15, 20, 25, 35, 40],
      borderColor: '#f89420',
      backgroundColor: 'rgba(248, 148, 32, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      x: {
        display: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
});
