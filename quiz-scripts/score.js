let score = 0;
let correct_ans = 0;
let right_answers =  0;
let wrong_answers = 0;
let option_a = document.getElementById("choice-a");
let option_b = document.getElementById("choice-b");
let option_c = document.getElementById("choice-c");
let option_d = document.getElementById("choice-d");
let d = document.getElementById("q_stuff");
let quiz_reset = document.getElementById("reset-quiz");

const answer_dict = {
    a : 1,
    b : 2,
    c : 3, 
    d : 4,
    get_a: function() {
        return this.a;
    }, 
    get_b: function() {
        return this.b;
    },
    get_c: function() {
        return this.c;
    },
    get_d: function() {
        return this.d;
    }, 
};

function reset_quiz() {
    localStorage.clear();
    window.open('index.html', '_self', false);
}

function set_correct_val(choice_val, val) {
    localStorage.setItem("value", choice_val);
    localStorage.setItem("page", val);
}

function find_final_score() {
    score = (right_answers) - (wrong_answers);
    localStorage.setItem("player_score", score);
    return score;
}

function update_page() {
    console.log("UPDATE_ATTEMPTED");
    window.open(localStorage.getItem("page"), '_self', false);
}

function add_right() {
    right_answers += parseInt(localStorage.getItem("right_ans"));
    console.log(right_answers);
}

option_a.addEventListener('click', () => {
    if(localStorage.getItem("value") === "1") {
        d.innerHTML = "What bank was involved with <i>McCulloch V. Maryland</i>?";

    }
});

option_b.addEventListener('click', () => {
    let b_value = String(answer_dict.get_b());
    let is_correct = (localStorage.getItem("value") === b_value);
    let is_false = (localStorage.getItem("value")  !== b_value);
    if(is_correct) {
        console.log("Correct answer Pressed!");
        add_right();
        localStorage.setItem("right_ans", right_answers);
        update_page();
    }

    if(is_false) {
        console.log("Incorrect answer");
        wrong_answers+=1;
        localStorage.setItem("wrong_ans", wrong_answers);
        update_page();
    }
    correct_ans = parseInt(localStorage.getItem("right_ans"));
    localStorage.setItem("right_ans", correct_ans);
    console.log(correct_ans);
    console.log("button b pressed!");
});

option_c.addEventListener('click', () => {
    let c_value = String(answer_dict.get_c());
    let is_correct = (localStorage.getItem("value") === c_value);
    let is_false = (localStorage.getItem("value") !== c_value);
    if(is_correct) {
        console.log("Correct answer Pressed!");
        add_right();
        localStorage.setItem("right_ans", right_answers);
        update_page();
    }

    if(is_false) {
        console.log("Incorrect answer");
        wrong_answers+=1;
        update_page();
    }
    correct_ans = parseInt(localStorage.getItem("right_ans"));
    console.log(correct_ans);
    console.log("button c pressed!");
});

option_d.addEventListener('click', () => {
    let d_value = String(answer_dict.get_d());
    let is_correct = (localStorage.getItem("answer") === d_value);
    let is_false = (localStorage.getItem("answer") !== d_value);
    if(is_correct) {
        console.log("Correct answer Pressed!");
        right_answers+=1;
        update_page();
    } else if(is_false) {
        console.log("Incorrect answer");
        wrong_answers+=1;
        update_page();
    } 
    console.log("button d pressed!");
});