function fact(n){

    if(n==0){
        return 1
    }
    if(n == 1){
        return 1
    }
    return n * fact(n-1)
}

let input = prompt("De quel nombre veux-tu la factorielle ?")

console.log(fact(input))