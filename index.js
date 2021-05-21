function spy(a,b){
    (a+b)
}

let a= 5
let b= 10 

function receivesAFunction(spy){
    let a= 5
    let b= 10 
    spy(a,b)
}   

// let name = function(person){
//     console.log (`Hi, name is ${person}`)
// }

function returnsANamedFunction(){
    return ( function name (person){
        console.log(`Hi, name is ${person}`)
    })
}


function returnsAnAnonymousFunction(){
    return ( (person) => {
        console.log(`Hi, name is ${person}`)
    })
}