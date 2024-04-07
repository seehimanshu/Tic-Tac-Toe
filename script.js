let game=document.querySelector(".game");
let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#winner");
let resetbtn=document.querySelector("#reset-btn");
let winnerArr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let playerTurnO=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerTurnO){
            box.innerText="O";
            playerTurnO=false;
        }
        else{
            box.innerText="X";
            playerTurnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    playerTurnO=true;
    msgContainer.classList.add("hide");

}
const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winwin)=>{
    msg.innerText=`Congratulation, winner is ${winwin}`;
    msgContainer.classList.remove("hide");
    disablebtn();
}

const checkWinner=()=>{
    for(let pattern of winnerArr){
        let pattern1=boxes[pattern[0]].innerText;
        let pattern2=boxes[pattern[1]].innerText;
        let pattern3= boxes[pattern[2]].innerText;

        if(pattern1!="" && pattern2!="" && pattern3!=""){
            if(pattern1===pattern2 && pattern2===pattern3){
                showWinner(pattern1);
            }
        }
    }
};

resetbtn.addEventListener("click",()=>{
    enablebtn();
});
newbtn.addEventListener("click",()=>{
    enablebtn();
});