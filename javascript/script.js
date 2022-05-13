
let timeExercice = 5;


  var myInterval = setInterval(()=>{
   
    console.log(timeExercice)
    
      timeExercice--
  }, 1000)

 


  setTimeout(function(){
    console.log(`teste: ${timeExercice}`)
    clearInterval(myInterval)
  }, 6000)

