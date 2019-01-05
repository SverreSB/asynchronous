console.log("Before timeout...");

//This will print after "After timeout...", because it has a timeout on two seconds
setTimeout(() => {
    console.log("Reading from database...");
}, 2000);

console.log("After timeout...");