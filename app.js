let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    msg.innerText="Game was draw! please play again";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        user.innerText=userScore;
        msg.style.backgroundColor="green";

    }
    else{
        msg.innerText=` You lose! ${compChoice} beats Your ${userChoice}`;
        compScore++;
        comp.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=genCompChoice();

    console.log("Comp choice = ",compChoice);
    if(compChoice==userChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==='paper'){
            userWin=compChoice==="scissor" ? false :true;
            
        }
        else{
            userWin=compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

    
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        console.log(userChoice+" choice was clicked");
        playGame(userChoice);
    })
})
