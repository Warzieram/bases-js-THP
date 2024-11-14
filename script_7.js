let input = prompt("Yo c'est moi le teen-bot")

if(input.endsWith("?")){
    console.log("Ouais, ouais...")
}
else if(input.localeCompare(input.toUpperCase()) === 0 && input != ""){
    console.log("Pwa, calme toi...")
}
else if(input.toUpperCase().includes("FORTNITE")){
    console.log("On s'fait un partie en soum-soum?")
}
else if(input == ""){
    console.log("T'es en PLS ?")
}
else{
    console.log("Balek...")
}