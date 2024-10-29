// Function for Publish Button (Placeholder)
function publish() {
  alert("Publish functionality is not yet implemented.");
}

// Voter Turnout Chart
const turnoutCtx = document.getElementById('turnoutChart').getContext('2d');
const turnoutChart = new Chart(turnoutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Unregistered Users', 'Registered Users'],
    datasets: [{
      data: [38.2, 61.8],
      backgroundColor: ['Red', 'Green'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// Ballots Cast Chart
const ballotsCtx = document.getElementById('ballotsChart').getContext('2d');
const ballotsChart = new Chart(ballotsCtx, {
  type: 'doughnut',
  data: {
    labels: ['Valid Ballots', 'Invalid & Blank Ballots'],
    datasets: [{
      data: [96.8, 3.2],
      backgroundColor: ['#2196F3', '#FFC107'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});