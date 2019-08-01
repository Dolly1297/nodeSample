var moment =require('moment');
var a = moment("2019",'YYYY');
var a = [
    {"days":"sunday"},
    {"days":"monday"},
    {"days":"tuesday"},
    {"days":"wednesday"},
    {"days":"thursday"},
    {"days":"friday"},
    {"days":"saturday"}
];

for(i=0;i<=a.length;i++){
    var days=a[i].days;
if(days == "monday"  &&  days == "saturday"){
    console.log(a[i].days + " is holiday" );
}else{
    console.log(a[i].days + " not holiday");
}
}