const Color = require('color');

console.log(Color('#E62424').hsl().array());
console.log(Color('#FF7878').hsl().array());
console.log(Color('#E62424').lighten(0.25).hsl().array());
console.log(Color('#E62424').lighten(0.5).hsl().array());
console.log(Color('#F903').hex());
