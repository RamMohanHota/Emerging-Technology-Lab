function getNumber(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try{
                let num = Math.floor(Math.random()*100)+1
                resolve(num)
            } catch(err){
                reject(err)
            }
        }, 3000)
    })
    return promise
}

function prime(num) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 1) {
                reject("Not prime");
                return;
            }
            if (num === 2) {
                resolve("Prime");
                return;
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    reject("Not prime");
                    return;
                }
            }
            resolve("Prime");
        }, 3000);
    });
    return promise;
}
function evenOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

async function operate(){
    try{

        let rn = await getNumber();
        console.log("Random num is: "+rn)
        let dn = await prime(rn)
        console.log("num is: "+dn)
        console.log("It is: " + evenOdd(rn));
    }catch(err){
        console.log("Error: "+err)
    }
}

operate()