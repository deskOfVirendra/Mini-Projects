if (navigator.geolocation) {
    let x = navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        const apiKey = 'fd9d9c6418c23d94745b836767721ad1';
        const url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
        fetch(url, { "method": "GET" })
            .then(response => response.json())
            .then(data => {

                var skycons = new Skycons({ "color": "white" });

                let icon = data['currently']['icon'].replace(/-/g, '_').toUpperCase();
                skycons.add("icon1", Skycons[icon]);
                skycons.play();
                
                const container = document.querySelector('.container');

                // temperature is created
                let temperature = document.createElement('h4');
                let temp = ((Number(data['currently'].temperature) - 32) * (5 / 9)).toFixed(2) + " C";
                let temperatureText = document.createTextNode(temp);
                temperature.appendChild(temperatureText);
                temperature.setAttribute('style','margin-top:10px');
                container.appendChild(temperature);

                //timezone is created
                let timezone = document.createElement('h1');
                let timezoneText = document.createTextNode(data['timezone']);
                timezone.appendChild(timezoneText);
                timezone.setAttribute('style','margin-top:15px');
                container.appendChild(timezone);
                
                //winds speed
                let windspeed = document.createElement('p');
                let windspeedText = document.createTextNode(data['currently'].windSpeed + " km/h wind");
                windspeed.appendChild(windspeedText);
                windspeed.setAttribute('style','margin-top:5px');
                container.appendChild(windspeed);
                
                // console.log(data);
            }
            );
    });

}
else {
    console.log('denied');
}