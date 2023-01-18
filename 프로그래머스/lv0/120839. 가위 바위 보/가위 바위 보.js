function solution(rsp) {
    return [...rsp].map(cur => {
        let result = '';
        switch (cur) {
            case '2':
                result = '0';
                break;
            case '0':
                result = '5';
                break;
            case '5':
                result = '2';
                break;
            default:
                result ='';
        }
        
        return result;
    }).join('');
}