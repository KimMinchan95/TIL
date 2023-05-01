const getSwtich = (control) => {
    switch(control) {
        case 'w':
            return 1;
        case 's':
            return -1;
        case 'd':
            return 10;
        case 'a':
            return -10;
        default:
            return 0;
    }
}

function solution(n, control) {
    return n + [...control].reduce((acc, cur) => {
        return acc + getSwtich(cur);
    }, 0);
}