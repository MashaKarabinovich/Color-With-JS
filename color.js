//functions for button 
//so we select button
const colorBtn = document.querySelector('.colorBtn');
//target body as well since that is whats changing color
const bodyBcg = document.querySelector('body');

//time to create an array with cool colors
const colors = ['#72ddf7', '#8093f1', '#b388eb', '#F7AEF8', '#f4f4ed', '#c4fff9',
 '#ff0f80', '#ffae03', '#ef959c', '#81c14b', '#2e933c'];
//we have an array now, need event so the button actually works
colorBtn.addEventListener('click', changeColor); 

function changeColor()
{
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
    
}
