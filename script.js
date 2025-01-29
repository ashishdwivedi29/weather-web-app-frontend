const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p:first-child");
const dateAndTimeField = document.querySelector(".time_location p:last-child");
const conditionField = document.querySelector(".condition p:last-child");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

let target = "Pune";

const fetchResults = async (targetLocation) => {
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=fea5677057354b88b43124228252901&q=${targetLocation}&aqi=no`;
        
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to fetch weather data");
        }
        
        const data = await res.json();
        console.log(data);

        let locationName = data.location.name;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition = data.current.condition.text;

        updateDetails(temp, locationName, time, condition);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

function updateDetails(temp, locationName, time, condition) {
    temperatureField.innerText = `${temp}°C`;
    locationField.innerText = locationName;
    dateAndTimeField.innerText = time;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value.trim();
    if (target) {
        fetchResults(target);
    }
}

form.addEventListener("submit", searchForLocation);

fetchResults(target);


// // http://api.weatherapi.com/v1/current.json?key=fea5677057354b88b43124228252901&q=pune&aqi=no

// const temperatureField = document.querySelector(".temp")
// const locationField = document.querySelector(".time_location p")
// const dateandTimeField = document.querySelector("time_location span");
// const conditionField = document.querySelector(".condition p")
// const searchField = document.querySelector(".search_area")
// const form = document.querySelector("form")


// let target = 'Pune'

// const fetchResults = async (targetLocation) =>{
//     let url = `http://api.weatherapi.com/v1/current.json?key=fea5677057354b88b43124228252901&q=${targetLocation}&aqi=no`;

//     const res = await fetch(url);

//     const data = await res.json();

//     console.log(data);

//     let locationName = data.location.name
//     let time = data.location.localtime
//     let temp = data.current.temp_c
    
//     let condition = data.current.condition.text;

//     updateDetails(temp, locationName, time, condition);
// }

// function updateDetails(temp,locationName, time, condition){
//     temperatureField.innerText = temp
//     locationField.innerText = locationName
//     dateandTimeField.innerText = time
//     conditionField.innerText = condition
// }

// function searchForLocation(e){
//     e.preventDefault();

//     target = searchField.value

//     fetchResults(target)
// }

// fetchResults(target)

