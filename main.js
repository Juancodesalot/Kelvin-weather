const kelvin = 293;
console.log('kelvin',kelvin);

// by having const it will assign 293 as the variable and will not be reassigned but can still be changed ; 
// added the quotes to remember the answer 

var celsius = kelvin - 273;

console.log('celsius',celsius);

// set a variable celsius with kelvin as the variable minus the spesified 273 later console.log to verify it worked. 

var Newton = celsius * (33/100);
console.log('Newton',Newton);

// newton 
var fahrenheit = celsius * ( 9/5 )+ 32  ;

console.log('fahrenheit',fahrenheit);

//  set a variable for fahrenheit with celsius inside and the product and division to conver to expected number console.log to check

console.log('fahrenheit_floor',Math.floor(fahrenheit));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// step 11 with kelvin at 0 fehrenheit is -459.40000000000003

console.log(`The temperature is ${kelvin} degrees kelvin.`);

console.log(`The temperature is ${celsius} degrees celsius.`);

console.log(`The temperature is ${Newton} degrees Newton.`);
