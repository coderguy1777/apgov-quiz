let start_button = document.getElementById("quiz-start-btn");
let curr_score = document.getElementById("quiz-score");
let score_val = 0;

start_button.addEventListener('click', () => {
    window.open('q_1.html', '_self', false);
    localStorage.setItem("current_page", score_val);
});