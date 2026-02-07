

function getWeatherData() {
     
    const city_name = document.getElementById("text").value.trim();

    if(city_name==="") {
        alert("please enter a city name");
        return;
    }
    else if(/\d/.test(city_name)) {
            alert("Numbers are not allowed in city name");
            document.getElementById("text").value=city_name.replace(/\d/g,"");
            return;
    }

    else if(/[^a-zA-Z\s]/.test(city_name)) {
        alert("Special characters are not allowed in city name");
        document.getElementById("text").value=city_name.replace(/[^a-zA-Z\s]/g,"");
        return;
    }
    const API_key="f17767e810759d09d64157db05ae57b1";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City is not found");
            }
            return response.json();
        })
        .then((data) => {
            document.getElementById("city-name").textContent = data.name +", "+data.sys.country;
            document.getElementById("wthr").textContent = data.main.temp + "°F";
            document.getElementById("mintemp").textContent = data.main.temp_min + "°F";
            document.getElementById("max-temp").textContent = data.main.temp_max + "°F";
            document.getElementById("humidity").textContent = data.main.humidity + "%";
            document.getElementById("wind-speed").textContent = data.wind.speed;
            document.getElementById("text").value="";
           
        })
        
        .catch((error) => {
            alert(error.message);
        });
}




















// btn.addEventListener("click",()=> {
//     const city_name = city_input.value.trim();


//    if(city_name ==="") {
//        alert("Please enter a city name");
//        return;
//    }
// });












