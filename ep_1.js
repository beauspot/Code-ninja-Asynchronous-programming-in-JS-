console.log(1);
console.log(2);

setTimeout( () => console.log(`Call back function fired`), 5000 );  // Asynchronous, so it doesnt block the code

console.log(3);
console.log(4);