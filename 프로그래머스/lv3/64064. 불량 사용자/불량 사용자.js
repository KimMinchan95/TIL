function solution(user_id, banned_id) {
    const bannedIdList = banned_id.map(id => {
        const regexp = new RegExp('^' + id.replaceAll('*', '.') + '$');
        
        return user_id.filter(user => regexp.test(user));
    });

    const list = new Set();
    
    const handlePick = (banList, pickList) => {
        if (!banList.length) {
            list.add(JSON.stringify(pickList.sort()));
            return;
        }
        
        for (let i = 0; i < banList[0].length; i++) {
            const copiedBanList = [...banList];
            const copiedPickList = [...pickList];
            
            const pick = banList[0][i];
            if (copiedPickList.find(id => id === pick)) continue;
            
            copiedPickList.push(pick);
            copiedBanList.shift();

            handlePick(copiedBanList, copiedPickList);
        }
    };
    
    handlePick(bannedIdList, []);
    
    return list.size;
}