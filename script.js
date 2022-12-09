console.log('hello')


let weather = {apikey:'6f3e6a2966b1b03c2ef1be0b978d17c5',


 fetchWeather: function (city) {
fetch( "https://api.openweathermap.org/data/2.5/weather?q=" +
city +
"&units=metric&appid=6f3e6a2966b1b03c2ef1be0b978d17c5 " 
)
.then((response) => {return response.json()})
.then ((data) => this.displayWeather(data))
.catch (()=> {
    alert("No result found")
})
},
displayWeather : function (data) {
    const {name} = data;
    const{description,icon} = data.weather[0];
    const {temp,humidity} = data.main;
    
    const{speed} = data.wind;
    const{sunrise,sunset} = data.sys
    console.log(temp,humidity,sunrise,sunset)
   
   
    document.querySelector('.city-weather').innerText = 'Weather in '+name;
    document.querySelector('.description-icon').src= "https://openweathermap.org/img/wn/"+icon +".png"
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText =  temp+" "+ "°C"

    document.querySelector('.humidity').innerText= "Humidity : " + humidity +"%"
    
    document.querySelector('.wind-speed').innerText = "Wind-Speed :" + speed + "km/h";
    document.querySelector('.weather').classList.remove('loading')
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
    
    // const {}

},
   search: function () {
    this.fetchWeather(document.querySelector('#search').value)
   },
}
 document.querySelector (".search-button").addEventListener ('click' , function (){
    weather.search();
 })
 document.querySelector(".search-bar").addEventListener('keyup' ,
 function(event){
   if(event.key == 'Enter'){
    weather.search();
   }
 })