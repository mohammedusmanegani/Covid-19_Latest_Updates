$.getJSON("https://api.covid19api.com/summary",
    function (data) {
        console.log(data);

        nfObject = new Intl.NumberFormat('en-US');

        var NewConfirmed = data.Global.NewConfirmed;
        var NewDeaths = data.Global.NewDeaths;
        var NewRecovered = data.Global.NewRecovered;
        var TotalConfirmed = data.Global.TotalConfirmed;
        var TotalDeaths = data.Global.TotalDeaths;
        var TotalRecovered = data.Global.TotalRecovered;


        NewConfirmed = nfObject.format(NewConfirmed);
        NewDeaths = nfObject.format(NewDeaths);
        NewRecovered = nfObject.format(NewRecovered);
        TotalConfirmed = nfObject.format(TotalConfirmed);
        TotalDeaths = nfObject.format(TotalDeaths);
        TotalRecovered = nfObject.format(TotalRecovered);

        $(".NewConfirmed").append(NewConfirmed);
        $(".NewDeaths").append(NewDeaths);
        $(".NewRecovered").append(NewRecovered);
        $(".TotalConfirmed").append(TotalConfirmed);
        $(".TotalDeaths").append(TotalDeaths);
        $(".TotalRecovered").append(TotalRecovered);

    });


let covid_data = []
fetch("https://api.covid19api.com/summary")
    .then(data => data.json())
    .then(data => {
        for (covid_info of data.Countries) {
            covid_data.push(
                `<tr class="country-search-filter">
                    <th scope="row"><img src="https://www.countryflags.io/${covid_info.CountryCode}/flat/24.png"><span style="margin-left: 10px;">${covid_info.Country}</span></th>
                    <td class="text-danger">${nfObject.format(covid_info.NewConfirmed)}</td>
                    <td class="text-danger">${nfObject.format(covid_info.TotalConfirmed)}</td>
                    <td class="text-dark">${nfObject.format(covid_info.NewDeaths)}</td>
                    <td class="text-dark">${nfObject.format(covid_info.TotalDeaths)}</td>
                    <td class="text-success">${nfObject.format(covid_info.NewRecovered)}</td>
                    <td class="text-success">${nfObject.format(covid_info.TotalRecovered)}</td>
                </tr>`
            );
        }
        document.getElementById('dump_data').innerHTML = covid_data.join("");
    })