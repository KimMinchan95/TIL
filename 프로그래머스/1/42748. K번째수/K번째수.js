const solution = (array, commands) => commands.reduce((acc, [i,j,k]) => [...acc, array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]], []);
