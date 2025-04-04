var express = require('express')
var app = express()

app.set("view engine", "pug");
app.set("views", "views");
//create route 

app.get("/cricketer", function (request, response) {
    
    let cricketer = {
        name: "Virat Kohli",
        dob: "November 5, 1988",
        matches: 500,
        runs: 25000,
        fifties: 135,
        hundreds: 80,
        average: 53.5
      };
    response.render('one',{
        detail : cricketer
    });
});

app.get("/cricketers", function (request, response) {
    
    let cricketers = [
        {
          name: "Virat Kohli",
          dob: "November 5, 1988",
          matches: 500,
          runs: 25000,
          fifties: 135,
          hundreds: 80,
          average: 53.5
        },
        {
          name: "Sachin Tendulkar",
          dob: "April 24, 1973",
          matches: 664,
          runs: 34357,
          fifties: 164,
          hundreds: 100,
          average: 48.5
        },
        {
          name: "MS Dhoni",
          dob: "July 7, 1981",
          matches: 538,
          runs: 17266,
          fifties: 108,
          hundreds: 16,
          average: 44.9
        },
        {
          name: "Rohit Sharma",
          dob: "April 30, 1987",
          matches: 450,
          runs: 17000,
          fifties: 92,
          hundreds: 45,
          average: 47.2
        },
        {
          name: "AB de Villiers",
          dob: "February 17, 1984",
          matches: 420,
          runs: 20014,
          fifties: 109,
          hundreds: 47,
          average: 50.7
        },
        {
          name: "Kane Williamson",
          dob: "August 8, 1990",
          matches: 350,
          runs: 15000,
          fifties: 75,
          hundreds: 40,
          average: 54.1
        },
        {
          name: "Joe Root",
          dob: "December 30, 1990",
          matches: 390,
          runs: 17000,
          fifties: 88,
          hundreds: 44,
          average: 51.3
        },
        {
          name: "Steve Smith",
          dob: "June 2, 1989",
          matches: 370,
          runs: 16000,
          fifties: 83,
          hundreds: 42,
          average: 52.6
        },
        {
          name: "Jacques Kallis",
          dob: "October 16, 1975",
          matches: 519,
          runs: 25534,
          fifties: 149,
          hundreds: 62,
          average: 56.1
        },
        {
          name: "Chris Gayle",
          dob: "September 21, 1979",
          matches: 478,
          runs: 19322,
          fifties: 105,
          hundreds: 42,
          average: 41.2
        }
      ];

    response.render('two',{
        detail : cricketers
    });
});


app.listen(5000, () => console.log('ready to accept request...'));