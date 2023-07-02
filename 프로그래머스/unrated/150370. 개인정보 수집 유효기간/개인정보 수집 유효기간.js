const MONTH_VALUE = 28;
const YEAR_VALUE = 12 * MONTH_VALUE;

function solution(today, terms, privacies) {
    const [tY, tM, tD] = today.split('.').map(Number);
    
    const termMap = terms.reduce((acc, cur) => {
        const [term, month] = cur.split(' ');
        
        acc.set(term, Number(month));
        
        return acc;
    }, new Map());
    
    return privacies.reduce((acc, privacy, idx) => {
        const [pDate, kind] = privacy.split(' ');
        const [pY, pM, pD] = pDate.split('.').map(Number);
        const term = termMap.get(kind);
        
        const last = (tY - pY) * YEAR_VALUE + (tM - pM - term) * MONTH_VALUE + tD - pD;
        
        if (last >= 0) acc.push(idx + 1);
        
        return acc;
    }, []);
}