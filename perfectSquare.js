const nextPerfectSquare = (num) => {
    let solution = 0;
    let half = Math.sqrt(num) + 1;
    if (Number.isInteger(half) === true) {
        solution = half * half;
    } else {
        solution = -1;
    }
    return console.log(solution);
}

nextPerfectSquare(9)
nextPerfectSquare(289)
nextPerfectSquare(3000)