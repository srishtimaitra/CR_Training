
//asynchronous ->
console.log("hello");
var b={};
setTimeout(function(){console.log("world")},10000);
console.log("done");

<br>

</br>

//call back ->
function callMe()
{
console.log("hello");
}
function person(){
this.busywork=function(action){
setTimeout(function(){
console.log("done with work"); action();
},2000);
console.log("run before");
};
}
var me = new person();
me.busywork(callMe);

<br></br>
//public private privileged ->

function person()
{
  var secret="secret!";
  this.myname="srishti";
  
  function privateMethod()
  {
    console.log("in a private method");
  }
  
  this.privilegedmethod=function()
  {
    console.log("hello");
    console.log(secret);
    console.log(privateMethod());
  }
}

//public method

person.prototype.publicmethod=function(){
  console.log("in a public method ");
  console.log(this.myname);
  return false;
}

var me= new person();
console.log(me.secret);
console.log(me.myname);
console.log(me.publicmethod());
console.log(me.privilegedmethod());

<br></br>


//public privileged and a little more ->

function person()
{
  var secret="secret!";
  this.myname="srishti";
  
  function privateMethod()
  {
    console.log("in a private method");
  }
  
  this.privilegedmethod=function()
  {
    console.log("hello");
    console.log(secret);
    console.log(privateMethod());
  }
}

//public method

person.prototype.publicmethod=function(){
  console.log("in a public method ");
  console.log(this.myname);
  return false;
}

var me1= new person();
//console.log(me.secret);
//console.log(me.myname);
//console.log(me.publicmethod());
 //console(me.privateMethod());
//console.log(me.privilegedmethod());

function Me()
{
  this.myplace="Bangalore";
  this.newperson= new person();
  //console.log(this.newperson.myname);
}

var srish= new Me();
console.log(srish.newperson.myname);