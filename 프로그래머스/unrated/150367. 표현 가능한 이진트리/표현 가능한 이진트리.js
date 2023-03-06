const checkBTree = (binary, start, end) => {
    const mid = Math.floor((start + end) / 2);
    const left = Math.floor((start + mid - 1) / 2);
    const right = Math.floor((mid + 1 + end) / 2);
    
    if (start === end) return true;
    
    if (binary[mid] === '0' && ((binary[left] === '1') || (binary[right] === '1'))) return false;
    
    if (!checkBTree(binary, start, mid - 1)) return false;
    if (!checkBTree(binary, mid + 1, end)) return false;
    return true;
}

function solution(numbers) {
    return numbers.map(num => {
        const binary = num.toString(2);
        const binaryLength = binary.length;
        // 이진트리 깊이
        const treeDeep = binaryLength.toString(2).length;
        
        const zeroSet = '0'.repeat(2**treeDeep - 1 - binaryLength);
        
        const bi_tree = zeroSet + binary;
        return checkBTree(bi_tree, 0, bi_tree.length - 1) ? 1 : 0;
    });
}