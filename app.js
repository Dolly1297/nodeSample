//console.log("Hello World");
var moment = require('moment');
var a =moment().add(1,'y').add(2,'M').add(3,'d').format("DD/MM/YYYY"); 
console.log(a);