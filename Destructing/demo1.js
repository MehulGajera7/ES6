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


var [a2,b3,,...c1]=[10,20,30,40,50,60,70];
console.log(a2);
console.log(b3);
console.log(c1);


let obj={name:"Mehul",rollno:7,college:"DDU"};
console.log(obj.name);
console.log(obj.rollno);
console.log(obj.college);

//let {name,rollno,college}=obj;
//console.log(name);

//let{name:a7,rollno:b7,college:c7}=obj;
//console.log(a7,b7,c7);

//let{name,rollno}=obj;
//console.log(name,rollno);

let{name:a7,college:c7}=obj;
console.log(a7,c7);

//let{name,college}=obj;
//console.log(name);
//console.log(college);

/*Exxample About the Array Against Objet*/
let a8=[10,20,30,40,50];
console.log(a8[0]);

let [d1,d2,,,d3]=a8;
console.log(d1,d2,d3);

/*Destructuring Using Function*/
let obj1={name:"Mehul",rollno:7,college:"DDU"};

function show({name,rollno,college})
{
   console.log(name,rollno,college);
}

show(obj1);

/*Destructuring Using Function with return*/
let obj2={name:"Mehul",rollno:7,college:"DDU"};

function show(z)
{
   return z;
}

let {name,rollno}=show(obj2);
console.log(name,rollno); 


//Destructuring used in nested objects
 let obj3={name1:"Mehul",rollno1:7,college1:"DDU",subject1:
{s1:"Java",s2:"AJ"}};
console.log(obj3.subject1.s1); 

let {name1,rollno1,subject1:{s1,s2}}=obj3;
console.log(s1);
console.log(name1);
