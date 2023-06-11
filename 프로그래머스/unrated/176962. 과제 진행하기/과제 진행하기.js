const getConvertedTime = (time) => {
    const [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
}

function solution(plans) {
    plans = plans.map(([task, startTime, progress]) => [task, getConvertedTime(startTime), Number(progress)]);
    plans.sort(([_, fir], [__, sec]) => fir - sec);
    
    const result = [];
    const stack = [];
    
    plans.forEach((plan, i) => {
        const [task, startTime, progress] = plan;
        
        if (!plans[i + 1]) {
            result.push(task);
            return;
        }
        
        const [nTask, nStartTime, nProgress] = plans[i + 1];
        
        const timeDiff = nStartTime - startTime;
        
        const timeToProgress = progress - timeDiff;
        
        let timeLeft = timeDiff - progress;
    
        if (timeToProgress > 0) {
            stack.push([task, timeToProgress]);
            return;
        }
        
        result.push(task);

        while (timeLeft > 0 && !!stack.length) {
            const top = stack[stack.length - 1];
            const [task, leftProgress] = top;
            top[1] -= timeLeft;
            timeLeft -= leftProgress;

            if (timeLeft >= 0) {
                const [task] = stack.pop();
                result.push(task);
            }
        }
    });
    
    for (let i = stack.length - 1; i >= 0; i--) {
        result.push(stack[i][0]);
    }
    
    return result;
}