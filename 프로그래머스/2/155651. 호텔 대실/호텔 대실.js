const CLEANING_TIME = 10;

function solution(book_time) {
    // key 나가는 시간 value 나가는 시간이 똑같은 방 개수
    const room = {};
    
    const convertedBookTime = book_time.map(arr => arr.map(time => {
        const [hour, min] = time.split(':');
        return Number(hour * 60) + Number(min);
    })).sort(([_, a], [__, b]) => a - b);

    outerLoop: 
    for (let i = 0; i < convertedBookTime.length; i++) {
        const [inTime, outTime] = convertedBookTime[i];
        
        const bookedOutTimes = Object.keys(room);
        
        for (let j = bookedOutTimes.length - 1; j >= 0; j--) {
            const bookedOutTime = bookedOutTimes[j];
            
            const numObjKey = Number(bookedOutTime);
        
            if (inTime >= (numObjKey + CLEANING_TIME)) {
                // 기존의 방을 빼고
                room[bookedOutTime] = --room[bookedOutTime];
                
                // 새로운 방을 추가
                room[outTime] = (room[outTime] + 1 || 1);
                if (!room[bookedOutTime]) delete room[bookedOutTime];
                continue outerLoop;
            }
        }
        
        if (room[outTime]) {
            room[outTime] = ++room[outTime];
            continue;
        }
        room[outTime] = 1;   
    }
    
    console.log(room)
    
    return Object.values(room).reduce((acc, cur) => acc + cur, 0);
}