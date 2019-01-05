const p = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //resolve("Test");
        reject(new Error('Something went wrong'));
    }, 2000);
});

p.
    then(res => console.log('Result', res))
    .catch(err => console.log('Error', err.message));