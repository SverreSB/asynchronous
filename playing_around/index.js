console.log("Before timeout...");


getUser(1, (user) => {
    console.log('User', user);
});

console.log("After timeout...")

//Using a callback to retreive user after timeout, to simulate when retriveing data from DB 
function getUser(id, callback){
    setTimeout(() => {
        console.log("Reading from database...");
        callback({id: id, name: "Test"});
    }, 2000); 
}


//console.log("After timeout...");