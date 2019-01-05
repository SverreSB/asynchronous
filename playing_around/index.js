console.log("Before timeout...");


getUser(1, (user) => {
    console.log('User', user);
    //Getting files after user is retreived
    getFiles(user, (files) => {
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
function getFiles(user, callback){
    if(user.id === 1){
        callback(['javaDoc.pdf', "learningToCode.pdf", "README.md"]);
    }
}


//console.log("After timeout...");