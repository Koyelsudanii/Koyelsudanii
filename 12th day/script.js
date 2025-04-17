const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Mark Twain",
        b: "William Shakespeare",
        c: "Charles Dickens",
        d: "Jane Austen",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
];

let quiz=document.getElementById("quiz")
let questionheading=document.getElementById('questionheading')
let optionlist=document.querySelectorAll('.optionlist')
let aoption=document.getElementById('aoption')
let boption=document.getElementById('boption')
let coption=document.getElementById('coption')
let doption=document.getElementById('doption')
let submitbtn=document.getElementById('submitbtn')
let currentQuizCount=0
let score=0
//console.log(quizData);
//console.log(quizData[currentQuizCount])

function loadQuiz(){
    deSelectOption()
    console.log("load quiz")
    let currentQuizData=quizData[currentQuizCount]
    console.log(currentQuizData)

    questionheading.innerText=currentQuizData.question
    aoption.innerText=currentQuizData.a
    boption.innerText=currentQuizData.b
    coption.innerText=currentQuizData.c
    doption.innerText=currentQuizData.d
}

function deSelectOption(){
    optionlist.forEach((element)=>element.checked=false)
}

function getSelected(){
    let selectedanswer;
    optionlist.forEach((element)=>{
        if(element.checked){
            console.log(element.id)
            selectedanswer=element.id
        }
    })
    return selectedanswer
}

submitbtn.addEventListener('click',()=>{   
    let answer=getSelected()
    console.log(answer)
    if(answer===quizData[currentQuizCount].correct){
        score++;
    }
    console.log("score",score)
    currentQuizCount++;
    if(currentQuizCount<quizData.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>`
    }
    console.log("show next question",currentQuizCount)
    currentQuizCount++;
    loadQuiz()
})