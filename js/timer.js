import { state } from './state.js';
import { alarm } from './alarm.js';

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

const showTime = (seconds) => {
    minutesElem.textContent = Math.floor(seconds / 60) > 9 ? Math.floor(seconds / 60) : `0${Math.floor(seconds / 60)}`;
    secondsElem.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
}

export const startTimer = () => {
    state.timeLeft--;
    
    // show on page
    showTime(state.timeLeft);

    if (state.timeLeft > 0 && state.isActive) {
        state.timerId = setTimeout(startTimer, 1000);
    }

    if (state.timeLeft <= 0 ) {
        alarm()
    }
}