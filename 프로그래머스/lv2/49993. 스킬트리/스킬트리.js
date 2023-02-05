function solution(skill, skill_trees) {
    const regexp = new RegExp(`[${skill}]`);
    return skill_trees.reduce((acc, cur) => {
        const filteredCur = [...cur].filter(s => s.match(regexp)).join('');
        
        if(skill.indexOf(filteredCur) === 0) acc++;
        
        return acc;
    }, 0);
}