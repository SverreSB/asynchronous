console.log("Before timeout...");


getUser(1, (user) => {
    console.log('User', user);
    //Getting files after user is retreived
    getFiles(user, (files) => {
        console.log(files);
    });
    //I am finishing this directory here. I will start working in new directory on promises from here
});

console.log("After timeout...")

//Using a callback to retreive user after timeout, to simulate when retriveing data from DB 
function getUser(id, callback){
    console.log("Reading from database...");
    setTimeout(() => {
        callback({id: id, name: "Test"});
    }, 2000); 
}

//For reaturning files if user id === 1
function getFiles(user, callback){
    console.log("Finding files...");
    setTimeout(() => {
        callback(['javaDoc.pdf', "learningToCode.pdf", "README.md"]);
    }, 3000);
}


//console.log("After timeout...");