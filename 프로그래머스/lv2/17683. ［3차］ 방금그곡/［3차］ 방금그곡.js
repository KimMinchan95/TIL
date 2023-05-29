const getMusicLen = (start, end) => {
    const [startHour, startMin] = start.split(':');
    const [endHour, endMin] = end.split(':');
    
    return (Number(endHour) - Number(startHour)) * 60 + (Number(endMin) - Number(startMin));
}

const getAnswer = (music, m) => {
    const idx = music.indexOf(m);
    for (let i = 0; i < m.length; i++) {
        if (music[idx + i] !== m[i]) {
            return false;
        }
    }

    if (music[idx + m.length] === '#') return false;
    
    return true;
};

const getSharpReplace = (str) => {
    return str.replace(/(C#)/g,'c')
              .replace(/(D#)/g,'d')
              .replace(/(F#)/g,'f')
              .replace(/(G#)/g,'g')
              .replace(/(A#)/g,'a');
}

function solution(m, musicinfos) {
    m = getSharpReplace(m);
    
    const musicList = musicinfos.reduce((arr, cur, idx) => {
        const [start, end, name, music] = cur.split(',');
        
        const playTime = getMusicLen(start, end);
        
        let musicReplaced = getSharpReplace(music);
        
        const scoreLen = musicReplaced.length;
        
        musicReplaced = playTime > musicReplaced.length ? musicReplaced.padEnd(playTime, musicReplaced) : musicReplaced.substr(0, playTime);

        arr.push([playTime, name, musicReplaced]);
        
        return arr;
    }, []);
    
    musicList.sort(([a], [b]) => b - a);
    
    for (let i = 0; i < musicList.length; i++) {
        const [_, name, music] = musicList[i];

        if (getAnswer(music, m)) {
            return name;
        }
    }
    
    return "(None)";
}