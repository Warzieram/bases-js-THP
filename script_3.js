n = prompt("Bienvenue dans ce super programme de la pyramide de mario (je sais c'est un concept révolutionnaire).\n Combien d'étages veux-tu ?")
n = parseInt(n)


res = ""
for(let i=1; i<=n; i++){
    res += (" ".repeat(n-i) + "#".repeat(i)) 
    res += "\n"
}

console.log(res)