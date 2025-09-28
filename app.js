let userScore =0;
let compScore=0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorechoice =document.querySelector("#computer-score");

const showWinner = (userwin,userChoice,ComputerChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
 console.log("you win");
 msg.innerText = `you win! Your ${userChoice} beats ${ComputerChoice}`;
 msg.style.backgroundColor = "green";
    }else{
        compScore++;
      compScorechoice.innerText=compScore;
        console.log("you will lose");
        msg.innerText =`You lose ${ComputerChoice} beats you ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}



const genComputerChoice = () =>{
const option =["rock","paper","scissors"];
 const randIndx = Math.floor(Math.random()*3); //to created random number
 return option[randIndx];
};

const drawgame = () =>{
    console.log("game was draw")
    msg.innerText="Game draw";
    msg.style.backgroundColor ="darkblue";
}
const playgame = (userChoice) =>{
    console.log("user choice :",userChoice)
    // generated computer choice
 const ComputerChoice =genComputerChoice();
 console.log("comp choice =",ComputerChoice)
 if(userChoice===ComputerChoice){
    //draw game
    drawgame();
 }else{
    let userwin =true;
    if(userChoice ==="rock"){
   userwin =ComputerChoice === "paper "?false :true;
    }else if (userChoice ==="paper"){
        userwin =ComputerChoice==="scissors"?false:true;
    }else if(userChoice=="scissors"){
        userwin=ComputerChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,ComputerChoice);
 }
};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id")
        console.log("choices was clicked",userChoice);
        playgame(userChoice);
    });
});
