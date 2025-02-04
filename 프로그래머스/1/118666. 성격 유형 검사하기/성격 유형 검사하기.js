function solution(survey, choices) {
    const MID = 4;
    
    const CHARACTORS = {
        RT: 0,
        CF: 0,
        JM: 0,
        AN: 0,
    }
    
    const surveyResult = survey.reduce((acc, cur, idx) => {
        const isDictionaryOrder = cur in CHARACTORS;
        const choice = choices[idx] - MID;
        
        const curSurvey = isDictionaryOrder ? cur : (cur[1] + cur[0]);
        
        acc[curSurvey] = acc[curSurvey] + (isDictionaryOrder ? choice : -choice);
        
        return acc;
    }, CHARACTORS);
   
    return Object.entries(surveyResult).map(([charactor, choice]) => {
        if (choice <= 0) return charactor[0];
        return charactor[1];
    }).join('');
}