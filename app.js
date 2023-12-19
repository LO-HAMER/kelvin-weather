const kelvin = 0;
console.log(kelvin);
//la const kelvin est de 293 kelvin
const celsius = kelvin - 273;
console.log(celsius);
// la const celsius est de 20 c°
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);
// la variable fahrenheit est de 68 f°
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is'${fahrenheit} degrees Fahrenheit.`);
let Newton = celsius * (33/100)
console.log(Newton);
Newton = Math.floor(Newton);
console.log(`The temperature is'${Newton} degrees Fahrenheit.`)
