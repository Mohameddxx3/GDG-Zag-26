const API_KEY = "deeeb273b6f642d0bd9224152261804" ;
const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

button.onclick =async function () {
    let cityName = input.value;
    const API_link = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}` ;

    document.querySelector(".error").style.display="none";

    try{
        let weather =await fetch(API_link);
        let myData= await weather.json()

        let city = myData.location.name;
        let temp = myData.current.temp_c;
        let humidity =myData.current.humidity;
        let wind = myData.current.wind_kph;

        document.getElementsByClassName("temp")[0].textContent=`${Math.round(temp)}°c`;
        document.getElementsByClassName("city")[0].textContent=city;
        document.getElementsByClassName("humidity")[0].textContent=`${humidity}%`;
        document.getElementsByClassName("wind")[0].textContent=`${wind} km/h`;

        let iconName = myData.current.condition.text;
        if(iconName == "Clouds" || iconName == "Partly cloudy" || iconName == "Cloudy"|| iconName == "Overcast"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(iconName == "Clear" || iconName == "Sunny" ){
            weatherIcon.src = "images/clear.png";
        }
        else if(iconName == "Rain" || iconName == "Patchy rain possible"|| iconName == "Heavy rain"|| iconName == "Moderate rain"|| iconName == "Light rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(iconName == "Drizzle"|| iconName == "Light drizzle"|| iconName == "Patchy light drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(iconName == "Mist"|| iconName == "Fog"|| iconName == "Freezing fog"){
            weatherIcon.src = "images/mist.png";
        }
        else if(iconName == "Snow"|| iconName == "Light snow"|| iconName == "Heavy snow"){
            weatherIcon.src = "images/snow.png"; 
        }

        // weatherIcon.src = "https:" + myData.current.condition.icon;

        document.querySelector(".weather").style.display="block";
    }catch(reason){
        console.log(reason);
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
    }
};
