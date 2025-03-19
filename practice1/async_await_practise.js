
function fetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data transfer")
        }, 2000);
    })
}

async function getdata(){
    console.log("fatching data......")
    const result = await fetch();
    console.log(result)
}
getdata();