'use strict';

const wrapper = document.querySelector('#simplebox');
const box = document.querySelector('#innerbox');
let pos = 0;
const startPos = {
    top: 0,
    left: 0,
};


document.addEventListener('keydown', (e) => {

    if (e.code === 'Enter') {
        animationStart();
    }
});

let id = function() {
    requestAnimationFrame(newAnimation);
}

document.addEventListener('keydown', (e) => {
    
    if (e.code === 'Escape'){
        console.log('animation stoped!');
        box.style.top = startPos.top;
        box.style.left = startPos.left;
        cancelAnimationFrame(id);
        pos = 0;
        
    }
    
});

// function newAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             box.style.top = pos + 'px';
//             box.style.left = pos + 'px';
            
//         }
//     }
// }

function animationStart() {
    requestAnimationFrame(newAnimation);
}

function newAnimation() {
    pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';

    if (pos < 445) {
        requestAnimationFrame(newAnimation);
    }

}










