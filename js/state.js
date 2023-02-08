const WORK_TIME = 1;
const BREAK = 3;
const RELAX = 10;

export const state = {
    work: WORK_TIME,
    break: BREAK,
    relax: RELAX ,
    status: 'work',
    count: 4,
    timeLeft: WORK_TIME * 60,
    isActive: false,
    timerId: 0,
}