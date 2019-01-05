//Running two parallel promises

const p1 = new Promise((resolve) => {
    setTimeout( () => {
        console.log('First promise ... ');
        resolve({id : 1, user : "Alice"});
    }); 
});

Promise.all([p1])
    .then(result => console.log(result));