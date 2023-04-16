
const input = document.getElementById('stateIND');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchBtn.click();
  }
});

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', getStats)

function getStats() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '53999905aamsh86f9963a1e8b13dp1a2c3bjsn084c277f06ef',
      'X-RapidAPI-Host': 'covid-19-india2.p.rapidapi.com'
    }
  };
  
  fetch('https://covid-19-india2.p.rapidapi.com/details.php', options)
    .then(response => response.json())
    .then(response => showStats(response))
    .catch(err => console.error(err));
}

function showStats(data) {
  debugger;
  let stateIND = document.getElementById('stateIND').value;
 let caseForState = data[stateIND];

  document.getElementById("state").innerHTML = `${caseForState.state}`;
  document.getElementById("confirm").innerHTML = `${caseForState.confirm}`;
  document.getElementById("cured").innerHTML = `${caseForState.cured}`;
  document.getElementById("death").innerHTML = `${caseForState.death}`;
  document.getElementById("total").innerHTML = `${caseForState.total}`;
}
  