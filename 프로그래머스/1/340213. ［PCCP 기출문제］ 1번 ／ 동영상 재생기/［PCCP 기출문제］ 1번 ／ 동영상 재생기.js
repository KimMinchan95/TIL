const changeToSec = (string) => {
    const [mm, ss] = string.split(":");
    return 60 * Number(mm) + Number(ss);
}

const changeToMMSS = (number) => {
    return [String(Math.floor(number / 60)).padStart(2, '0'), String(number % 60).padStart(2, '0')].join(':');
}

function solution(video_len, pos, op_start, op_end, commands) {
    const [videoLenSec, posSec, opStartSec, opEndSec] = [video_len, pos, op_start, op_end].map(changeToSec);
    
    const result = commands.reduce((curSecond, command) => {
        if (opStartSec <= curSecond && curSecond <= opEndSec) {
            curSecond = opEndSec;
        }
        
        if (command === 'prev') {
            curSecond = Math.max(curSecond - 10, 0);
        }
        
        if (command === 'next') {
            curSecond = Math.min(curSecond + 10, videoLenSec);
        }
        
        if (opStartSec <= curSecond && curSecond <= opEndSec) {
            curSecond = opEndSec;
        }
        
        return curSecond;
    }, posSec);
    
    return changeToMMSS(result);
}