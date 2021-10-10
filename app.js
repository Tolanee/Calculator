const btns = document.querySelectorAll(".btn");
const input = document.querySelector('.input')
const equals = document.querySelector('.equals')

btns.forEach(btn =>{
  btn.addEventListener('click', getButton)

  function getButton(e){
    let style = e.currentTarget.classList
    
    if (style.contains('number')) {
      let number = btn.textContent
      input.value += number
      
    }else if(style.contains('equals')){
      try {
        let value = eval(input.value)
      input.value = value
      } catch (error) {
        input.value = 'Syntax Error!'
      }
     
    }else{
      input.value = ' '
    }
   }
})

