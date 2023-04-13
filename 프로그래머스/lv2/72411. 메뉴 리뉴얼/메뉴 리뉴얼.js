function solution(orders, course) {
    const result = [];
    const map = new Map();
    
    const combinations = [];
    
    const combination = (menus, pick) => {
        if (pick.length >= 2) combinations.push(pick);
        
        if (!menus.length) return;
        
        for (let i = 0; i < menus.length; i++) {
            const picked = menus[i];
            const deletedMenu = menus.slice(i + 1);
            combination(deletedMenu, pick + picked);
        }
    };

    orders.forEach(order => {
        combination([...order].sort().join(''), '');
    });
    
    combinations.forEach(menu => {
        const isExist = map.has(menu);
        map.set(menu, isExist ? map.get(menu) + 1 : 1);
    });
    
    const menuArr = [...map.entries()].sort(([_, firstCount], [__, secondCount]) => secondCount - firstCount).filter(([_, menuCount]) => menuCount !== 1);
    
    course.forEach(menuLength => {
        let countMemo = 0;
        for (i = 0; i < menuArr.length; i++) {
            const [menu, count] = menuArr[i];
            
            if (countMemo > count) break;
            
            if (menu.length === menuLength) {
                if (!countMemo) countMemo = count;
                
                result.push(menu);
            }
        } 
    });
    
    return result.sort();
}