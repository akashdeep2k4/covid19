// news

const input = document.getElementById('country');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchBtn.click();
  }
});

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', getStats)

function getStats() {
  let country = document.getElementById('country').value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '53999905aamsh86f9963a1e8b13dp1a2c3bjsn084c277f06ef',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };
  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
    .then(response => response.json())
    .then(response => showStats(response.response[0]))
    .catch(err => console.error(err));
}

function showStats(data) {
  // console.log(data);
  //COVID CASES
  document.getElementById("casesNew").innerHTML = `${data.cases.new}`;
  document.getElementById("casesActive").innerHTML = `${data.cases.active}`;
  document.getElementById("casesCritical").innerHTML = `${data.cases.critical}`;
  document.getElementById("casesRecovered").innerHTML = `${data.cases.recovered}`;
  // document.getElementById("casesPop").innerHTML = `${data.cases.1M_pop}`;
  document.getElementById("casesTotal").innerHTML = `${data.cases.total}`;
  //COVID DEATHS
  document.getElementById("deathsNew").innerHTML = `${data.deaths.new}`;
  // document.getElementById("deathsPop").innerHTML = `${data.deaths.1M_pop}`;
  document.getElementById("deathsTotal").innerHTML = `${data.deaths.total}`;
  //COVID TESTS
  // document.getElementById("testsPop").innerHTML = `${data.tests.1M_pop}`;
  document.getElementById("testsTotal").innerHTML = `${data.tests.total}`;
}



// State

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
  