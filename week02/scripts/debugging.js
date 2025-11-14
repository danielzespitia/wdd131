const radiusOutput = document.getElementById('radius');

// Corrected Error 1
// 'area' is not an HTML tag. The ID '#area' must be selected
const areaOutput = document.querySelector('#area'); 

let area = 0;

// Corrected Error 2
// The comparison operator (==) was used instead of the assignment operator (=)
const PI = 3.14159; 

// Corrected Error 3: Type Error (TypeError)
// 'radius' needs to be reassigned (from 10 to 20), so it must be 'let', not 'const'
let radius = 10; 

area = PI * radius * radius;

// Corrected Error 4
// A value cannot be assigned directly to an HTML element object
// The .textContent property must be used to set the visible text
radiusOutput.textContent = radius;
areaOutput.textContent = area;
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;