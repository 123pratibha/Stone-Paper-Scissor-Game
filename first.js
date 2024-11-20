let choices=document.querySelectorAll(".choice");
let result=document.querySelector("#result");
let comp=document.querySelector("#computer");
let user=document.querySelector("#user");
let computerScore=0;
let userScore=0;

function system()
{
     
    let option=["rock","paper","scissor"];
    let idx= Math.floor(Math.random()*3) ;
    return option[idx];

}

function draw(){
  console.log("game draw! 🙂");
  result.innerText="game draw 🙂";
  result.style.backgroundColor="white";
  result.style.color="black";




}
const win=(userWin,userChoice ,compChoice)=>
{
  if(userWin==true)
  {
    // console.log("congrats you Win 🥳");
    userScore++;
    result.style.backgroundColor="rgb(0,230,0)";
    result.innerText=`you Win! 🥳 your ${userChoice} beats ${compChoice}`;
    user.innerText= userScore;
  }


else {
  computerScore++;
  console.log("you loose 🥲");
  result.style.backgroundColor="rgb(250, 40, 40)";
  result.innerText=`you loose 🥲 ${compChoice} beats your ${userChoice} `;
  comp.innerText=computerScore;
}
}
const playGame=(userChoice)=>{

  console.log(userChoice);
  const compChoice=system();
  console.log(compChoice);

    if(compChoice===userChoice)
    {
         draw();
    }
    else{
      let userWin=true;

      if(userChoice==="rock")
      {
        userWin=compChoice==="paper"?false:true;
        win(userWin,userChoice,compChoice);
      }
      else if(userChoice==="paper")
      {
        
        userWin=compChoice==="scissor"?false:true;
        win(userWin,userChoice,compChoice);
      }
      else if(userChoice==="scissor")

      {
          userWin=compChoice==="rock"?false:true;
          win(userWin,userChoice,compChoice);
      }

    }
 }



// console.log(system());
// console.log(system());
// console.log(system());

choices.forEach((choice)=>
  {
      choice.addEventListener("click",()=>
      {
           const userChoice=choice.getAttribute("id");
           playGame(userChoice);
      })
  })




