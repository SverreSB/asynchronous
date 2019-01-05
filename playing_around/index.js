console.log("Before timeout...");


getUser(1, (user) => {
    console.log('User', user);
    //Getting files after user is retreived
    getFiles(user.name, (files) => {
        console.log(files);
    });
});

console.log("After timeout...")

//Using a callback to retreive user after timeout, to simulate when retriveing data from DB 
function getUser(id, callback){
    setTimeout(() => {
        console.log("Reading from database...");
        callback({id: id, name: "Test"});
    }, 2000); 
}

//For reaturning files if user id === 1
function getFiles(username, callback){
    setTimeout(() => {
        console.log("Reasing files...")
        callback(['javaDoc.pdf', "learningToCode.pdf", "README.md"]);
    }, 3000);
}


//console.log("After timeout...");