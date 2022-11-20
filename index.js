const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
const questionEl=document.getElementById("question")
const formEl=document.getElementById("form")
const inputEl=document.getElementById("input")
const scoreEl=document.getElementById("score")
const correctAns=num1*num2

questionEl.innerHTML=`What is ${num1} multiplied by ${num2}?`

let score=JSON.parse(localStorage.getItem("score"))

if(!score){
    score=0
}

scoreEl.innerHTML=`score: ${score}`

formEl.addEventListener("submit",(event)=>{
    // event.preventDefault()
    const userAns=+inputEl.value
    if(userAns==correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
    }
    updateLocalStorage()
})

const updateLocalStorage=()=>{
    localStorage.setItem("score",JSON.stringify(score))
}

localStorage.clear()

