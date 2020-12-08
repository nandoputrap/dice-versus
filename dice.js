let button = document.querySelector(".button");
let selectPic = document.querySelector(".picture");
let pic1 = document.createElement("img");
let pic2 = document.createElement("img");
let message = document.createElement("p");
let dice1 = 0;
let dice2 = 0;

function rolldice1(){
    dice1 = Math.floor(Math.random() * 6) + 1;
    // console.log(dice1);
    // // selectPic.classList.toggle("hide");
    selectPic.appendChild(pic1);
    // pic.classList.toggle("image");
    // alert("hello");
    if(dice1 === 1){
        pic1.setAttribute("src", "1.png");
    }else if(dice1 === 2){
        pic1.setAttribute("src", "2.png");
    }else if(dice1 === 3){
        pic1.setAttribute("src", "3.png");
    }else if(dice1 === 4){
        pic1.setAttribute("src", "4.png");
    }else if(dice1 === 5){
        pic1.setAttribute("src", "5.png");
    }else{
        pic1.setAttribute("src", "6.png");
    }
}

function rolldice2(){
    dice2 = Math.floor(Math.random() * 6) + 1;
    selectPic.appendChild(pic2);
    if(dice2 === 1){
        pic2.setAttribute("src", "1.png");
    }else if(dice2 === 2){
        pic2.setAttribute("src", "2.png");
    }else if(dice2 === 3){
        pic2.setAttribute("src", "3.png");
    }else if(dice2 === 4){
        pic2.setAttribute("src", "4.png");
    }else if(dice2 === 5){
        pic2.setAttribute("src", "5.png");
    }else{
        pic2.setAttribute("src", "6.png");
    }
}

let click = button.addEventListener("click", function(){
    rolldice1();
    rolldice2();
    if(dice1 > dice2){
        console.log("1 menang");
        selectPic.appendChild(message);
        message.innerHTML = "Player 1 Win!";
    }else if(dice1 === dice2){
        selectPic.appendChild(message);
        console.log("draw");
        message.innerHTML = "Draw!";
    }else{
        selectPic.appendChild(message);
        console.log("2 menang");
        message.innerHTML = "Player 2 Win!";
    }
});

