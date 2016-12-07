

//number 1

var squareNum= function (x){
   var result= Math.sqrt(x);
    console.log('The result of squaring the number ' + x + ' is ' + result);
      return result;
}
squareNum(23);

//number 2

var halfNum=function(y){
  var result=(y)/2;
  console.log('Half of '+y+' is '+result);
  return result;
}
halfNum(4);


//number 3
var percentOf=function(a,b){
var result=a*100/b;
console.log(a+' is '+result+' % of '+b);
return result;
}
percentOf(3,6);
//number 4
var areaOfCircle= function(c){
 var result=radius * radius * PI;
 console.log('The area for a circle with radius '+c+' is '+ result+' .');
 return result;
}
//number 5
var areaOfCircle= function(radius){
var result=Math.PI*radius*radius;
console.log('The area for a circle with radius '+ radius +' is '+result);
return result;

}

//Rounding of area of circle
Math.round(areaOfCircle(6));



//part 2 calculation

// 1

var partTwo=function(input){
  var halfOfInput= input/2;
  var sqrtOfFirst=Math.sqrt(halfOfInput);
  var areaOfCircle=Math.PI*sqrtOfFirst*sqrtOfFirst;
  var percentageOfArea=sqrtOfFirst*100/areaOfCircle;

}

//strings

//strings DrEvil
var drEvil=function(a){
 if (a<1000000){
  console.log(a+" dollars");
} else (a===1000000){
  console.log(a+' dollars '+'(pinky)');
 }
}

//mixup
var mixUp = function(a,b){
    var subStrA = a.substring(0,2);
    var subStrB = b.substring(0,2);
    a = a.replace(/^[A-Za-z]{2}/, subStrB);
    b = b.replace(/^[A-Za-z]{2}/, subStrA);
    return a + " " + b;
}


}
// FixStart
var fixStart=function(str){





  var firstChartt=
}
//Verbing
var verbing=function(input){
 if (a.length>=3) {
 } else (a.length<3){
  return a;
 }
}
// Not bad
var notBad=function(input){
 var myStr1='bad';
 var myStr2='not';
 if()
}
