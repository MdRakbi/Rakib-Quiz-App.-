/*let Username = document.querySelector("#Username");
let email = document.querySelector("#email");
let Password = document.querySelector("#Password");
let Password2 = document.querySelector("#Password2");
let Form = document.querySelector("#Form");
function showError(input, message){
    const FormControl = input.parentElement
    FormControl.className = "form-control error";
    const small = FormControl.querySelector("small");
    small.innerText = message;

}

function showsuccess(input){
    const FormControl = input.parentElement
    FormControl.className = "form-control success";

}

function checkmaile (input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/;
    if(RegEx.test(input.value)){
        showsuccess(input)
    }else{
        showError(input, "Email is Not vailed");
    }
}

function checkInputLength(input,min,max){
    if(input.value.lenght < min){
        showError(input, `${GetFieldName(input)} You Much Be At Least ${min}characters`);
    }else if(input.value.lenght > max){
        showError(input, `${GetFieldName(input)} You Much Be less then ${max}characters`);
    }
    else{
        showError(input)
    }

}


function GetFieldName (input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkPassWordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Password Is Not")
    }
}

Form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputLength(Username, 3, 20)
    checkInputLength(Password, 3, 20)
    checkmaile(email)
    checkPassWordMatch(Password,Password2)
})


const group = document.querySelector(".group");
const output = document.querySelector(".output");

const sizes =["XLL","XL","M","L","s"];

group.innerHTML = sizes.map((size)=> `<div>
    <input type="radio" id="${size}" value="${size}" name="size">
    <label for="${size}">${size}</label>
    </div>`
).join(" ");
    
const RadioButton = document.querySelectorAll("input");

for(const radioBtn of RadioButton){
    radioBtn.addEventListener("change", output)
}


function showOutput(e){
    console.log(e);

    if(this.checked){
        document.querySelector(".output").innerHTML = `You selected ${this.value}`;
    }
}


const btn = document.querySelector("#btn");


btn.addEventListener("click",(e)=> {
    let checkbox = document.querySelectorAll("input[name='color']:checkbox");
    let values =[];
    checkbox.forEach((checkbox)=> {
        values.push(checkbox.value);
    });

    console.log(values)
})


const lang = document.querySelector(".lang");
const btn = document.querySelector(".btn");

btn.onclick = (e) => {
    e.preventDefault();
    const optionsValue = [].filter
    .call(LockManager.options, (option) => option.selected )
    .map((option) => option.text );
    alert(optionsValue)
}


const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("input",()=> {
    result.textContent = message.value;
});


const DragArea = document.querySelector(".AppBody"),
DragText = DragArea.querySelector("h3"),
button = DragArea.querySelector("button"),
input  = DragArea.querySelector("input");
let Myfile ; 



button.onclick  = () => {
    input.click()
}

input.addEventListener("change" ,function(){
    Myfile = this.files[0];
    DragArea.classList.add("active"); 
    ShowMe()
    
})

DragArea.addEventListener("dragover", (event)=> {
event.preventDefault(); 
DragArea.classList.add("active"); 

DragText.textContent = "Release to Upload File";

} ) 

DragArea.addEventListener("dragleave",  ()=> {
    DragArea.classList.remove("active"); 
    DragText.textContent = "Drag & Drop";
}); 


DragArea.addEventListener("drop", (event)=>{ 
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];

    ShowMe()
})

function ShowMe(){
    let filetype = Myfile.type; 
    let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

    if(VaildEx.includes(filetype)){
        
      let fileReader  = new FileReader(); 

      fileReader.onload = () => {
          let imgUrl = fileReader.result; 
          let img  = `<img src="${imgUrl}" alt="">`

          DragArea.innerHTML = img
      }
      fileReader.readAsDataURL(Myfile); 
    }
    else  {
        alert("আপনার ফাইল এর সাইজ 100 MB. এর বেশি! দয়াকরে ফাইলের সাইজ পরিবর্তন করুন। ধন্যবাদ")
        DragArea.classList.remove("active"); 
        DragText.textContent = "Drag & Drop";
    }
} */


    
const MyBtn = document.querySelector(".MyBtn button"); 
const RulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton");
const Questions = document.querySelector(".Questions")
const option_list = document.querySelector(".MyOptions"); 
const timeCount = document.querySelector(".TimeCount .Seconds"); 
const timeLine = document.querySelector(".QuestionsHeader .time_lines"); 
const timeOff = document.querySelector(".QuestionsHeader .TimeLeft"); 



 MyBtn.onclick = ()=>{
    RulesBox.classList.add("activeInfo"); 
    }
    
exitButton.onclick = ()=>{
        RulesBox.classList.remove("activeInfo"); 
}


ContinueButton.onclick = ()=>{
    RulesBox.classList.remove("activeInfo"); 
    Questions.classList.add("activeQuiz"); 
    showQuestions(0);
    startTimer(15)

    startTimerLine(0); 

}



const nextBtn = document.querySelector(".nextBtn");

const reslut_box = document.querySelector(".reslut_box");
const restart_quiz = document.querySelector(".buttons .restart1");
const quit_quiz = document.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    Questions.classList.add("activeQuiz"); 
    reslut_box.classList.remove("activeResult"); 
    let que_count = 0; 
    let timeValue = 15; 

    let widthValue = 0;
    let userScore =0; 
    showQuestions(que_count);
    clearInterval(counter); 
    startTimer(timeValue)
    clearInterval(counterLine); 
    startTimerLine(widthValue); 
    nextBtn.style.display = "none"; 
    timeOff.textContent = "Time Left";

}


quit_quiz.onclick = ()=>{
    window.location.reload();
}

let que_count = 0; 
let counter; 
let timeValue = 15; 

let counterLine; 
let widthValue = 0;
let userScore =0; 

nextBtn.onclick = ()=> {
    if(que_count  <questions.length - 1 ){
        que_count ++ 
        showQuestions(que_count);
        clearInterval(counter); 
        startTimer(timeValue)

        clearInterval(counterLine); 
        startTimerLine(widthValue); 
        nextBtn.style.display = "none"; 
        timeOff.textContent = "Time Left";

    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        console.log("You Have Completd Your Task 🥰");
        showResultBox()
       
    }
}

function showQuestions(index) {
 const que_text = document.querySelector('.que_text');

 let option_tag =  '<div class="options"><span>' + questions[index].options[0]  +'</span></div>'
                    + '<div class="options"><span>' + questions[index].options[1]  +'</span></div>'
                    + '<div class="options"><span>' + questions[index].options[2]  +'</span></div>'
                    + '<div class="options"><span>' + questions[index].options[3]  +'</span></div>'


 let que_tag = "<span>" + questions[index].numb+ "." + questions[index].question + " </span>"; 
 que_text.innerHTML = que_tag;
option_list.innerHTML = option_tag;
const total_que = document.querySelector(".total_que");
let total_queTag  = '<p>' + questions[index].numb + ' Of 5 </p>'
total_que.innerHTML = total_queTag;



const option = option_list.querySelectorAll(".options"); 
for(let i=0; i<option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)"); 
}

}

let tickIcon ='<div class="tick icon"><i class="fas fa-check"></i></div>'; 
let crossIcon = '<div class="cross icon"><i class="fas fa-times"></i></div>'; 


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correctAns = questions[que_count].answer; 
   let alloptions = option_list.children.length;  

   if(userAns == correctAns){
       userScore +=1 ;
       console.log(userScore); 
      answer.classList.add("correct")
       console.log("Answer Is Correct"); 
     answer.insertAdjacentHTML("beforeend", tickIcon); 
   }else{
      answer.classList.add("incorrect")
       console.log("Answer Is Wrong ");
        answer.insertAdjacentHTML("beforeend", crossIcon); 

       for(let i =0; i<alloptions; i++){
           if(option_list.children[i].textContent == correctAns ){
            option_list.children[i].setAttribute("class", "options correct"); 
            option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); 
           }
       }
   }




for(let i=0; i<alloptions; i++){
option_list.children[i].classList.add("disabled"); 
}

nextBtn.style.display = "block"; 


}


function showResultBox(){
    RulesBox.classList.remove("activeInfo"); 
    Questions.classList.remove("activeQuiz"); 
    reslut_box.classList.add("activeResult");
    
    const scoreText = document.querySelector(".score_text"); 
    if(userScore > 3){
       let scoreTag = '<span>Congratulations You Got <p>'+ userScore +'</p> Out Of <p>'+questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
   else if(userScore > 1){
        let scoreTag = '<span>Carry On 👌 You Got <p>'+ userScore +'</p> Out Of <p>'+questions.length +'</p></span>';
         scoreText.innerHTML = scoreTag; 
     }
     else{
        let scoreTag ='<span> I Am  Sorry You Got <p>'+ userScore +'</p> Out Of <p>'+ questions.length +'</p></span>'; 
    
        scoreText.innerHTML = scoreTag;
    }
   
}



function startTimer(time){
    counter = setInterval(timer, 1000 ); 
   function timer(){
    timeCount.textContent = time;
    time--; 

    if(time <9){
        let addZero = timeCount.textContent; 
        timeCount.textContent = "0" + addZero
    }
    if(time <0){
        clearInterval(counter)
        timeCount.textContent ="00"; 
        timeOff.textContent = "Time Off";
        let correctAns = questions[que_count].answer; 
        let alloptions = option_list.children.length;  
        for(let i =0; i<alloptions; i++){
            if(option_list.children[i].textContent == correctAns ){
             option_list.children[i].setAttribute("class", "options correct"); 
             option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); 
            }
        }
        
        for(let i=0; i<alloptions; i++){
            option_list.children[i].classList.add("disabled"); 
            }
            
            nextBtn.style.display = "block"; 

    }
    
   }

}


function startTimerLine(time){
    counterLine = setInterval(timer, 50);
    function timer(){
        time += 1 ; 
        timeLine.style.width = time + "px"; 
        if(time > 319){
            clearInterval(counterLine); 
        }
    }
}