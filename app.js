const correctAnswer = ['B','B','B','A']
const formAnswer = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

formAnswer.addEventListener('submit' , e =>{
  e.preventDefault()

  let score = 0

  let userAnswer = [formAnswer.q1.value,formAnswer.q2.value,formAnswer.q3.value,formAnswer.q4.value]
  userAnswer.forEach((answer,index)=>{
    if(answer === correctAnswer[index]){
      score += 25
    }
  })

  // show result
  scrollTo(0,0)
  
  result.classList.remove('d-none')

  let output = 0
  let timer = setInterval(() => {
    result.querySelector('span').textContent=`${output}%`
    if(output == score){
      clearInterval(timer)
    }else{
      output++
    }
  }, 10);
  
})