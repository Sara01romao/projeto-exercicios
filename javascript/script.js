const openModal = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const btnAdd =document.querySelector('#add');
const exercise = document.querySelector("#exercise");
const list = document.querySelector('.list')



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




let arr =[];
let itens = JSON.parse(localStorage.getItem('exercises'));
if(!itens){
  list.innerHTML=`<li>Add exercícios</li>`
}else{
  
  list.innerHTML=`${itens.map(e => `<li>${e} <button>X</button></li>`).join('')} `
}


add.addEventListener('click', ()=>{

    
     if(!itens){
       arr.push(exercise.value) 
       localStorage.setItem('exercises', JSON.stringify(arr)) 
       console.log("Arr", arr)
       list.innerHTML=`${arr.map(e => `<li>${e} <button>X</button></li>`)} `
      
     }else{
      itens.push(exercise.value)
      localStorage.setItem('exercises', JSON.stringify(itens))
      console.log("itens", itens)
      
      list.innerHTML=`${itens.map(e => `<li>${e} <button>X</button></li>`).join('')} `
     }
  
})
