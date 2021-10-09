// HTTP REQUESTS

/*
- Make HTTP requests to get data from another server

- We make this requests to an API endpoint.

- An endpoint is just a url that a particular server or API exposes to us,
so we can use them to get data from them. 

- Once we make a request to the end point to the browser 
we typically get back a selection of data in a format known an JSON,
& JASON is a format which looks very much like JS objects
*/

// creating a request object 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    };
});

// making request using the get methd
request.open('GET', 'http://jsonplaceholder.typicode.com/todos/');

// Sending the request
request.send();