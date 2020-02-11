var voxel={x:3.6,y:7.4,z:6.54};
//var a=voxel.x;
//var b=voxel.y;
//var c=voxel.z;

//console.log(a);
//console.log(b);
//console.log(c);

const {p:a,q:b,r:c}=voxel;
//console.log(p);
//console.log(q);
//console.log(r);

var [e,,,,,f]=[1,2,3,4,5];
console.log(e,f);

var m=[10,20,30,40,50,60,70];
m.forEach(element => {
   //console.log (element*2);
});

var n1=[10,20,30,40,50];
var n2=n1.map(Number=>Number*2);
console.log(n2);

var n=new Date();
console.log(new Date().toTimeString());
console.log(new Date().toUTCString());
console.log(new Date().getUTCMinutes());
console.log(new Date().getMilliseconds());
console.log(new Date()); 


var [a1,b1,,b2,...rest1]=[1,2,3,4,5,6,7,8,9];
console.log(a1,b1,b2);
console.log(rest1);
