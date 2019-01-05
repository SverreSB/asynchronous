console.log("Before timeout...");

//getting a user object with function getUser, which is supposed to simulate getting data from DB
const user = getUser(1);
//Will log "undefined" since there is a timeout in function getUser
console.log(user);
console.log("After timeout...")

function getUser(id){
    setTimeout(() => {
        console.log("Reading from database...");
        return {id: id, name: ""};
    }, 2000); 
}


//console.log("After timeout...");