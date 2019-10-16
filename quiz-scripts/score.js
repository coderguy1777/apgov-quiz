let score = 0;
let option_a = document.getElementById("choice-a");
let option_b = document.getElementById("choice-b");
let option_c = document.getElementById("choice-c");
let option_d = document.getElementById("choice-d");

option_a.addEventListener('click', () => {
    window.open('q_2.html', '_self', false);
    localStorage.setItem('score_in', score+1);
    console.log(localStorage.getItem("score_in"));
});

option_b.addEventListener('click', () => {
    window.open('q_3.html', '_self', false);
    localStorage.setItem('score_in', parseInt(localStorage.getItem("score_in"))+1);
    console.log(localStorage.getItem("score_in"));
});

option_c.addEventListener('click', () => {
    window.open('q_4.html', '_self', false);
    localStorage.setItem('score_in', parseInt(localStorage.getItem("score_in"))+1);
    console.log(localStorage.getItem("score_in"));
});
option_d.addEventListener('click', () => {
    window.open('q_5.html', '_self', false);
    localStorage.setItem('score_in', parseInt(localStorage.getItem("score_in"))+1);
    console.log(localStorage.getItem("score_in"));
});