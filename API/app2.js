function download(){
    console.log("download started");
    let res=true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(res){
                resolve("download finished")
            } 
            else{
                reject("download failed")
            }
        },3000)
    })
}

function Upload(){
    console.log("download started");
    let res=true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(res){
                resolve("Upload finished")
            }
            else{
                reject("Upload failed")
            }
        },2000)
    })
}

function Print(){
    console.log("download started");
    let res=true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(res){
                resolve("Print finished")
            }
            else{
                reject("Print failed")
            }
        },1000)
    })
}

download()
.then((msg)=>{
    console.log(msg);
    return print();
})
.then((msg)=>{
    console.log(msg);
    return Upload();
    
})
.then((msg)=>{
    console.log(msg);
    
})
.catch((msg)=>{
    console.log(msg);
    
})

