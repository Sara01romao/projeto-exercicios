
let timeExercice = 5;

  //start 30 interval
  function start(){
    const startInterval = setInterval(()=>{
   
      console.log(timeExercice)
      
        timeExercice--
    }, 1000)


    setTimeout(function(){
      console.log(`teste: ${timeExercice}`)
      clearInterval(startInterval)
    }, 6000)
  }


