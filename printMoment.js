var moment = require('moment');
var a = moment().format("DD-MMMM-YYYY");
var a =[
         {"name":"tina", "dob":"12-03-1998"},
         {"name":"mia", "dob":"18-04-2001"},
         {"name":"puja", "dob":"21-05-1997"},
         {"name":"piya", "dob":"19-09-1999"},
         {"name":"mahak","dob":"23-11-2019"},
         {"name":"shri", "dob":"25-10-2018"}
]
for(i=0;i<a.length;i++){
    var name = a[i].name;
    var age = a[i].dob;
console.log(a[i].name +"," +moment( a[i].dob,"DD-MM-YYYY").format("DD-MMMM-YYYY"));
}