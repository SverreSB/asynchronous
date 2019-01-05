//consume promises
getUser(1)
    .then(user => getFiles(user.name))
    .then(files => console.log(files[0]))
    .catch(err => console.log('Error', err.message));


// Creating promises in the functions

function getUser(id){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("Reading user data...")
            resolve({id: id, name: "New User"});
        }, 2000); 
    });   
}

function getFiles(username){
    return new Promise( (resolve, reject) => { 
        setTimeout(() => {
            console.log("Finding files...")
            resolve(['javaDoc.pdf', "learningToCode.pdf", "README.md"]);
        }, 2000);
    });   
}

//Create promise
/*const p = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //resolve("Test");
        reject(new Error('Something went wrong'));
    }, 2000);
});

//Consume promise
p.
    then(res => console.log('Result', res))
    .catch(err => console.log('Error', err.message));*/