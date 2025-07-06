const calcStandard = (num) => {
    let standard = num + 10;
    if (standard % 100 >= 60) {
        standard -= 60;
        standard += 100;
    }
    return standard;
}

const makeLogs = (timelog, startday) => {
    return timelog.filter((cur, i) => ![0, 6].includes((startday + i) % 7))
}


function solution(schedules, timelogs, startday) {
    return schedules.reduce((acc, cur, i) => {
        const logs = makeLogs(timelogs[i], startday);
        const standard = calcStandard(cur);
        
        const isAttendance = logs.every(time => time <= standard);
        return acc += Number(isAttendance)
    }, 0);
}