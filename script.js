let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let new_btn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let win_container=document.querySelector(".win_container")
var turnO=true;
var count=0;
// let arr1=["apple","banana","mango"];
// let arr2=[["a","b"],["c","d"],["e","d"]];
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){ //player1 ki turn hai
            box.innerText="O";
            box.style.color="purple";
            turnO=false;
            
        }else{ //player2 ki turn hai
            box.innerText="X";
            box.style.color="gray";
            turnO=true;
           
        }
        box.disabled=true; //once value is store in box it cannot change again
        checkWinner();
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
  };
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    win_container.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],
        //     pattern[1],
        //     pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
                return true;
            }
        }
    }

};
const reset_game =()=>{
    turnO=true;
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    win_container.classList.add("hide");
}
new_btn.addEventListener("click",reset_game);
reset_btn.addEventListener("click",reset_game);
