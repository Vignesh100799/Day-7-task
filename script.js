// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// a ) Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var countries = result.filter((reg)=>reg.region==="Asia")
    console.log(countries);
    }




// b ) Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var population = result.filter((po)=>po.population<200000)
    console.log(population);
    }

// c )Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var resultc=JSON.parse(request.response);
    resultc.forEach(details => {
        console.log(details.name)
console.log(details.capital)
console.log(details.flag)
    });
}

// d )Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var total = result.reduce((acc, ele)=>acc + ele.population, 0)
    console.log(total);
    }

 // e)Print the country which uses US Dollars as currency.

 var req = new XMLHttpRequest();

 req.open("GET","https://restcountries.com/v2/all");
 req.send();
 req.onload=function(){
     var res=JSON.parse(req.response);
     res.filter(element=>{
          
         for (let key in element.currencies){
             if(element.currencies[key].code==="USD"){
                 console.log(element.name)
             }
         }
     })}
 