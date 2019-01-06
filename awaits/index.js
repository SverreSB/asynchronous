


async function findCustomerFile(){
    try{
        const user = await getUser(1);
        const files = await getFiles(user.name);
        console.log(files);
    }catch(err){
        console.log('Error', err.message);
    }
    
}

findCustomerFile();

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