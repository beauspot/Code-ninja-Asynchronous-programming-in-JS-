// Example of chaining a promise

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
      // Executing the nrtwork request
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
            reject('error getting resource');
        }
      });

      request.open("GET", resource);
      request.send();
    });

};

getTodos('todos/luigi.json')
.then(data => { console.log(`Promise 1 resolved: ${data}`);
    return getTodos('todos/mario.json')
}).then(data => {
    console.log(`Promise 2 resolved:`, data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log(`Promise 3 was resolved:`, data)
}).catch(err => {
    console.log(`Promise rejected:`, err);
});