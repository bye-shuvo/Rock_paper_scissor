let user = document.querySelector('.user');
user.innerHTML = "USER";
let computer = document.querySelector('.computer');
computer.innerHTML = "COMPUTER";

let win_text = document.querySelector('.text');

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');

let random;

let score = document.querySelector('.score');
let user_count = 0;
let computer_count = 0;

let game_logic = () =>{
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {       
        button.addEventListener('click' , () =>{

            win_text.style.fontSize = "4em";
            random = Math.round(Math.random() * 3);
            user.innerHTML = button.innerHTML;
            computer.innerHTML = buttons[random].innerHTML;
            
            if(user.innerHTML === computer.innerHTML){
                win_text.innerHTML = "DRAW";
                user_count = user_count + 0;
                computer_count = computer_count + 0;
            }
            else if(user.innerHTML === rock.innerHTML && computer.innerHTML === paper.innerHTML){
                win_text.innerHTML = "Computer Wins!";
                computer_count = computer_count + 1;
            }
            else if(user.innerHTML === rock.innerHTML && computer.innerHTML === scissor.innerHTML){
                win_text.innerHTML = "User Wins!";
                user_count = user_count + 1;            }
            else if(user.innerHTML === paper.innerHTML && computer.innerHTML === rock.innerHTML){
                win_text.innerHTML = "User Wins!";
                user_count = user_count + 1;
            }
            else if(user.innerHTML === scissor.innerHTML && computer.innerHTML === paper.innerHTML){
                win_text.innerHTML = "User Wins!";
                user_count = user_count + 1;
            }
            else if(user.innerHTML === scissor.innerHTML && computer.innerHTML === rock.innerHTML){
                win_text.innerHTML = "Computer Wins!";
                computer_count = computer_count + 1;
            }
            else if(user.innerHTML === paper.innerHTML && computer.innerHTML === scissor.innerHTML){
                win_text.innerHTML = "Computer Wins!";
                computer_count = computer_count + 1;
            }
            else{
                win_text.innerHTML = "VS";
            }

            score.innerHTML = `USER : ${user_count} COMPUTER : ${computer_count}`;
            
        })
    });
}

game_logic();

