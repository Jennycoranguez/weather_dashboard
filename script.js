var currentDiv=document.querySelector("#currentDiv")
var forecastDiv=document.querySelector("#forecastDiv")
var inputEl=document.querySelector("#query")


var searchbtn=document.querySelector("#searchbtn")

searchbtn.addEventListener("click",fetchfirstapi)
function fetchfirstapi (event){
    event.preventDefault()
    console.log("hi")
    var city =inputEl.value
    console.log(city)
    var firstapi="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=e15da31e5450aadb694ca729616ad35d"
    fetch(firstapi).then((response)=>{
        return response.json() 
    }).then((data)=>{
        console.log(data)
        var lon=data.city.coord.lon
        var lat=data.city.coord.lat
            var secondapi="https://api.openweathermap.org/data/3.0/onecall?lat=" + lat +"&lon=" + lon + "&appid=5c769ed7c4767861c0220b706b49fea3"
        fetch(secondapi).then((response)=>{
            return response.json()
        }).then((data)=>{
        console.log(data)
        })
    })
}

