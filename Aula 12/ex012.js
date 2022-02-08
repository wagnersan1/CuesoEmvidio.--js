var agora = new Date()
var hora = agora.getUTCHours()

console.log(`Agora sao exatamente ${hora} horas`)

if (hora <= 12 || hora > 6) {
    console.log("Bom dia")
}else if (hora <=18){
    console.log("Boa Tarde");
}else{
    console.log("Boa Noite!")
}