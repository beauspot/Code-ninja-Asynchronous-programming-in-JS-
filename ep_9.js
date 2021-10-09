// fetch api
let a = fetch('todos/luigi.json');      //====returns a promise pending====

a.then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});

