// to get city based climate data i used open weather map.org
let weather={
    "apiKey":"e1418fe57c41ed84c22f87def44a92d7",
    fetchWeather: function(city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city  
            +"&units=metric&appid="
            + this.apiKey

        )
        // https://openweathermap.org/img/wn/01n@2x.png
        .then((response) => response.json()) 
        .then ((data)=> this.displayWeather(data));
    },
    //to display the weather in the website
    displayWeather: function(data){
        const { name }=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText ="Weather In " + name;
        document.querySelector(".icon").src=
        'http://openweathermap.org/img/wn/'+icon+'@2x.png';
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText= temp+ " °C";
        document.querySelector(".humidity").innerText="Humidity:  "+ humidity+"%";
        document.querySelector(".wind").innerText= "Wind Speed: "+speed+"km/h";


    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-box").value);
    }
};
document.querySelector(".searchbox button")
.addEventListener("click",function(){
weather.search();
})
