const openModal = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const btnAdd =document.querySelector('#add');
const exercise = document.querySelector("#exercise");



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



  //modal
openModal.addEventListener('click', ()=>{
    modal.classList.add('open');

})

closeModal.addEventListener('click', ()=>{
  modal.classList.remove('open');

})






add.addEventListener('click', ()=>{

     let arr =[];
     let itens = JSON.parse(localStorage.getItem('exercises'));
     if(!itens){
       arr.push(exercise.value) 
       localStorage.setItem('exercises', JSON.stringify(arr)) 
      
     }else{
       itens.push(exercise.value)
      localStorage.setItem('exercises', JSON.stringify(itens))
     }
      
     

    
  
})
