var moment = require('moment');
var now = moment(new Year());
var end = moment("age");
var duration = moment.duration(now.diff(end));
var year = duration.asYears();{

var a  = [
         {"name":"Ram", "age":"92"},
         {"name":"Shivam", "age":"43"},
         {"name":"Piya", "age":"56"},
         {"name":"Mahak", "age":"16"},
         { "name":"Khush", "age":"88"},
         {"name":"Yaman", "age":"21"},
         {"name":"Shreyansh", "age":"15"}

]
for(i=0;i<a.length;i++){
    var age=a[i].age;
    if(age>=18){
        console.log( a[i].name +" eligible for voting");
    }else{
        console.log(a[i].name +" not eligible for voting" + years);
    }
}

}