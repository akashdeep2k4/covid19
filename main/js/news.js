const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '53999905aamsh86f9963a1e8b13dp1a2c3bjsn084c277f06ef',
        'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
    }
};

fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True', options)
    .then(response => response.json())
    .then(response => show(response))
    .catch(err => console.error(err));

function show(response) {

    for (let i = 0; i < response.articles.length; i++) {
        let div = document.createElement('div');
        div.classList.add("news")

        div.textContent = response.articles[i].summary;

        document.body.append(div)


    }

}