const getTodos = callback => {
    // creating a request object 
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);

        } else if( request.readyState === 4 ){

            callback("could not fetch data", undefined);
        };
    });

// making request using the get methd
request.open('GET', 'http://jsonplaceholder.typicode.com/todos/');

// Sending the request
request.send();
};


console.log(1);
console.log(2);

getTodos( (err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
