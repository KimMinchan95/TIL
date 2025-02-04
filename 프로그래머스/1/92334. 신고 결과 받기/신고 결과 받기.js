function solution(id_list, report, k) {
    const map = new Map(id_list.map(id => [id, {
        report: new Set(),
        reported: new Set(),
        banned: false,
    }]));
    
    report.forEach(curReport => {
        const [id, reportedId] = curReport.split(' ');
        
        map.get(id).report.add(reportedId);

        const reportedList = map.get(reportedId).reported;
        reportedList.add(id);
        if (reportedList.size === k) {
            map.set(reportedId, {
                ...map.get(reportedId),
                banned: true,
            })
        }
    });
    
    const bannedMap = new Map();
    
    map.forEach((value, key) => {
        const isBanned = value.banned;
        if (isBanned) {
            bannedMap.set(key, true);
        }
    });
    
    const result = [];
    map.forEach((value, key) => {
        let count = 0;
        value.report.forEach((value, key) => {
            if (bannedMap.get(value)) {
                count++;
            }
        })
        result.push(count);
    });
    
    return result;
}