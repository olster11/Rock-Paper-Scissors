// Grabbing the relevant HTML elements
let userScoreDisplay = document.getElementById('youScore');
let cpuScoreDisplay = document.getElementById('cpuScore');
let resultText = document.getElementById('resultText');
let userIcon = document.getElementById('userIcon');
let cpuIcon = document.getElementById('cpuIcon');
const buttons = document.querySelectorAll('button')

//Variables
let userScore = 0;
let cpuScore = 0;

// Icon Options
const iconOptions = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"]

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let randNum = () => Math.floor(Math.random() * 3);
        //compare();
        i = 0;
        r = 0;

        function loop() {
            if (i < 3) {

                setTimeout(() => {
                    console.log(i);
                    cpuIcon.className = iconOptions[i]
                    userIcon.className = iconOptions[i]

                    i++;
                    loop();
                }, 70);
            } else if (r < 6) {
                i = 0
                r++;
                loop();
            } else {
                userIcon.className = button.className
                cpuIcon.className = iconOptions[randNum()]
                compare();


            }
        }
        loop();




    })
})



function compare() {
    if ((userIcon.className == iconOptions[0] && cpuIcon.className == iconOptions[2]) ||
        (userIcon.className == iconOptions[1] && cpuIcon.className == iconOptions[0]) ||
        (userIcon.className == iconOptions[2] && cpuIcon.className == iconOptions[1])) {
        userScore++;
        userScoreDisplay.textContent = userScore;
        resultText.textContent = 'YOU WIN'
        console.log('You Win')
    } else if (userIcon.className == cpuIcon.className) {
        console.log('its a tie')
        resultText.textContent = 'ITS A TIE'

    } else {
        console.log('you lose')
        cpuScore++;
        resultText.textContent = 'YOU LOSE'

        cpuScoreDisplay.textContent = cpuScore;
    }
}

