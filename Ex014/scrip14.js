function carregar(){
    var msg = document.getElementById(`msg`);
    var img = document.getElementById("imagem")
    var data = new Date();
    var horas = data.getHours()
    msg.innerHTML =`Agora sao ${horas} horas`
    if (horas >= 6 && horas <=12) {
        console.log("Bom dia")
        img.src =" https://images.pexels.com/photos/205410/pexels-photo-205410.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
        window.document.body.style.background ="#a8a465"
    } else if (horas >=12 && horas <=18 ) {
            console.log("Boa Tarde")
        img.src ="https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        document.body.style.background ="#8f6841"
    } else if(horas >=18 && horas <= 24) {
          console.log("Boa Noite")
        img.src ="https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        document.body.style.background = "#493a61"
    } else {
         console.log("Boa Madrugada")
        img.src="https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        document.body.style.background = "#080715"
        }
        
    
}