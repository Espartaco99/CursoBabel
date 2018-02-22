const x = function(){ 
    new Promise( (resolve, reject) => {
        setTimeout(()=> {resolve("Resuelto")}, 2000)
    })
}

let res = x().then((res) => {console.log(res)})