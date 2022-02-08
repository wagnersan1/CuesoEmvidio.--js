function verficar() {
   // window.alert("Até aqui foi")  
   var data = new Date();
   var ano = data.getFullYear();
   var fAno = document.getElementById("txtanoNac");
   var resut = document.querySelector(`div#res`);
   if (fAno.value.length == 0 || Number(fAno.value) == ano){
      window.alert("[ERRO] Verifique os dados e tente novamente")
   } else{
   // window.alert("tudo ok")
   var fsex = document.getElementsByName(`radsex`)
   var idad = ano - Number(fAno.value);
   var genero = " "
   var image = document.querySelector("img")
      // esta maneira cria uma tg "IMG"
      
   // resut.innerHTML = `Idade calculada: ${idad}`
      if ( fsex[0].checked ){
         genero = "Homem"
      if (idad >= 0 && idad < 15) {
         //Criancia
      }else if (idad < 21) {
         //Jovem
         // image.etAttribute(`src`,``)
      }else if (idad < 50) {
         // Adulto
         // img.etAttribute(`src`,``)
      }else{
         // Idoso
         // img.etAttribute(`src`,``)
      }
      } //sexMas

      if(fsex[1].checked) {
      genero = "Mulher" 
      if (idad >= 0 && idad < 15) {
         //Criancia
      }else if (idad < 21) {
         //Jovem         
      }else if (idad < 50) {
         // Adulto
      }else{
         // Idoso
      }
         
      }  //sexFem
   }
}
