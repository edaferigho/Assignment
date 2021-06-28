

function dropElements(arr,func){
    let newArray =[]
    for(ar of arr){
        if(func(ar)){
            newArray.push(ar)
        }
        
    }
    return newArray
}

function check(n){
    return n>=3
}
let array = [1,2]
newElement = dropElements(array,check)
console.log(newElement)
