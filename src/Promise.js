function abc()
{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            var a=100;
            if(a===10)
            {
                console.log("promise resolved");
                resolve();
            }
            else{
                console.log("not");
                reject();
            }
        },2000);
    })
}
abc()
.then(()=>{
    console.log("resolved");
})
.catch(()=>{
    console.log("Not resolved");
});