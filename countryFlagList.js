
//** ! 1. Get all the countries from Asia continent /region using Filter function */

// let XMLHttpRequest = require('xhr2')

// let xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://restcountries.com/v3.1/all');

// xhr.onload = function() {
//     let details = JSON.parse(xhr.responseText)
//     let result = []
//     const country = details.filter((val)=>{
//         if(val.region === "Asia"){
//             result.push('country: '+val.name.common)
//         }
//     })
//     console.log(result);
    
// }
// xhr.send();

/*--------------------------------------------------------------------------*/


//** !  2. Get all the countries with a population of less than 2 lakhs using Filter function  */

// let XMLHttpRequest = require('xhr2')

// let xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://restcountries.com/v3.1/all');

// xhr.onload = function() {
//     let details = JSON.parse(xhr.responseText)
//     let result = []
//     const country = details.filter((val)=>{
//         if(val.population < 200000){
//             result.push('country: '+val.name.common,'Population: '+val.population)
//         }
//     })
//     console.log(result);
    
// }
// xhr.send();

/*--------------------------------------------------------------------------*/


//** !  3. Print the following details name, capital, flag, using forEach function  */

// let XMLHttpRequest = require('xhr2')

// let xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://restcountries.com/v3.1/all');

// xhr.onload = function() {
//     let details = JSON.parse(xhr.responseText)
//     let result = []
//     const country = details.forEach(val => {
//         result.push('country: '+val.name.common, 'Capital: '+val.capital, 'Flag: '+val.flags.svg )
//     });
//     console.log(result);
    
// }
// xhr.send();

/*--------------------------------------------------------------------------*/

// //** !  4. Print the total population of countries using reduce function  */

// let XMLHttpRequest = require('xhr2')

// let xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://restcountries.com/v3.1/all');

// xhr.onload = function() {
//     let details = JSON.parse(xhr.responseText)
    
//     const getPopulation = details.reduce((a,b)=>{
//        return a+b.population
//     },0)
//     console.log(getPopulation.toLocaleString("en-US"));
    
// }
// xhr.send();

/*--------------------------------------------------------------------------*/


//** !  5. Print the country that uses US dollars as currency  */

//  let XMLHttpRequest = require('xhr2')

// let xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://restcountries.com/v3.1/all');

// xhr.onload = function() {
//     let details = JSON.parse(xhr.responseText)
//     // let result = []
//     let countryList = details.filter((val)=> val.currencies !== undefined)

//     let printResult = countryList.map((e) => {
//         if(e.currencies.hasOwnProperty("USD")){

//             console.log(e.name.common);
//         }
//     })
    
// }
// xhr.send();


/*--------------------------------------------------------------------------*/