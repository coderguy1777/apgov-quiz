let player_score = parseInt(localStorage.getItem('score'));
let player_msg = document.getElementById("player_message");
let score_box = document.getElementById("player_score");
let button_no = document.getElementById('button-no');
let button_yes = document.getElementById('button-yes');

function get_score() {
    score_box.innerHTML = player_score + "/6"
    message_to_display();
}

function open_home() {
    window.open('index.html', '_self', false);
}

function message_to_display() {
    if(player_score <= 2) {
        player_msg.innerHTML = "You did poorly, would you like to play again?"
    } 

    if(player_score < 0) {
        player_msg.innerHTML = "Oh dear god you didn't do well, would you like to try again?";
    }

    if(player_score === 4 || player_score > 4) {
        player_msg.innerHTML = "You did great, would you like to play again for fun?";
    }
}

button_yes.addEventListener('click', () => {
    localStorage.clear();
    open_home();
});

button_no.addEventListener('click', () => {
    alert('Thanks for playing!');
    window.open('https://www.goodfreephotos.com/albums/art-and-illustrations/emotiguy-thumbs-up-guy.png', '_self', false);
});