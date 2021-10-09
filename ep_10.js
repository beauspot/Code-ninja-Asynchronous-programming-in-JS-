// async / await

const getTodos = async () => {

    // using the fetch API
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;
};


console.log(1);
console.log(2);

getTodos()
    .then(data => console.log('resolved:', data));

console.log(3);
console.log(4);