let userScore =0;
let compScore=0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorechoice =document.querySelector("#computer-score");
// this the winner function if the winner win or draw ,lose then in msg ,box comes output

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

/*function related to the  generated the random number and choose the
computer genrated option by array */

const genComputerChoice = () =>{
const option =["rock","paper","scissors"];
 const randIndx = Math.floor(Math.random()*3); //to created random number
 return option[randIndx];
};

/* if the game was draw then this function will be
work that it prints the dialog box game was draw */

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
 //user choice part where user can select paper,scissors or rock
 if(userChoice===ComputerChoice){
 drawgame();//calling function
 }else{
    let userwin =true;
    if(userChoice ==="rock"){
   userwin =ComputerChoice === "paper "?false :true;
    }else if (userChoice ==="paper"){
        userwin =ComputerChoice==="scissors"?false:true;
    }else if(userChoice=="scissors"){
        userwin=ComputerChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,ComputerChoice); //calling function
 }
}; 
/*function was clicked the image by user
it tell the what image was clicked by the user it tell */

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id")
        console.log("choices was clicked",userChoice);
        playgame(userChoice);
    });
});
