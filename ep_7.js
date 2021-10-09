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
.then(data => console.log(`Promise Resolved:`, data))
.catch(err => console.log(`Promise rejected:`, err));



// Promise Example
/* const getSomething = () => {
    return new Promise((resolve, reject) => {
        // this is where we fetch the data ie network request
        //resolve('some data'); // runs if the promise was fulfilled
        reject('some error'); // runs if the promise was rejected
    });
};

getSomething()
.then(data => { console.log(data) })
.catch( err => {
    console.log(err);
}); */