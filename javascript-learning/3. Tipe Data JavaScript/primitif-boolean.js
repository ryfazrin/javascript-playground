var foo = true;
var bar = false;

console.log(foo);
console.log(bar);

// error
var foo = TRUE;
var bar = False;

console.log(foo); // ReferenceError: TRUE is not defined
console.log(bar); // ReferenceError: False is not defined