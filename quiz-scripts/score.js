function answer_check(id) {
    switch(id) {
        case 0:
            alert('Correct!');
            open_q_2();
            break;
        case 1:
            alert('Wrong!')
            open_q_2();
            break;
    }
}

function answer_check_2(id) {
    switch(id) {
        case 0:
            alert('Correct!');
            open_q_3();
            break;
        case 1:
            alert('Wrong!');
            open_q_3();
            break;
    }
}

function answer_check_3(id) {
    switch(id) {
        case 0:
            alert('Correct!');
            open_q_4();
            break;
        case 1:
            alert('Wrong!');
            open_q_4();
            break;
    }
}

function answer_check_4(id) {
    switch(id) {
        case 0:
            alert('Correct!');
            open_q_5();
            break;
        case 1:
            alert('Wrong!');
            open_q_5();
            break;
    }
}

function answer_check_5(id) {
    switch(id) {
        case 0:
            alert('Correct!');
            open_q_6();
            break;
        case 1:
            alert('Wrong!');
            open_q_6();
            break;
    }
}

function answer_check_6(id) {
    switch(id) {
        case 0:
            alert('Correct!');
            window.open('index.html', '_self', false);
            break;
        case 1:
            alert('Wrong!');
            window.open('index.html', '_self', false);
            break;
    }
}

function open_q_2() {
    window.open('q_2.html', '_self', false);
}

function open_q_3() {
    window.open('q_3.html', '_self', false);
}

function open_q_4() {
    window.open('q_4.html', '_self', false);
}

function open_q_5() {
    window.open('q_5.html', '_self', false);
}

function open_q_6() {
    window.open('q_6.html', '_self', false);
}