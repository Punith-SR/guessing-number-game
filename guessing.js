const max = prompt("enter the max number");
const random = Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("You are right! congrats!! the random number is",random);
        break;
        //giving hint
    }else if(guess<random ){
       guess= prompt("your guess was too small.please try again");
    }else{ 
        guess= prompt("your guess was too large.please try again");
    }
 
}