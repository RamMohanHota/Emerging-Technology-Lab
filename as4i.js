function aService(){
    let myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let status = false

            if(status){
                resolve("Task is completed");
            } else {
                reject("Error while performing the operation")
            }
        }, 2000)
    })
    return myPromise
}


async function operator(){
    try{ 
        let res = await aService();
        console.log("Try Block: "+res)
    } catch(err){ 
        console.log("catch block: "+err)
    } finally{
        console.log("Finally Block")
    }
}

function vote(age){
    let promise = new Promise((callback1, callback2)=>{
        setTimeout(()=>{
            if(age >= 18){
                callback1("Eligible to vote")
            } else {
                callback2("Not eligible to vote")
            }
        }, 2000)
    })
    return promise
}


async function checkVote(age){
    try{
        let result = await vote(age)
        console.log(result)
    } catch(err){
        console.log(err) 
    }
}

checkVote(22)