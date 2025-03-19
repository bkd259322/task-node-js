const folderName = 'new folder';

fs.mkdir(folderName,(err)=>{
    if(err){
        console.log("error",err)
    }
    console.log("folder create succesfully")
})