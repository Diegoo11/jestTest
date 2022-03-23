function analyzeArray (...numbers){
    let average = 0;
    numbers.forEach(num => {
        average += num
    });
    average = average/numbers.length

    let min = Math.min(...numbers);

    let max = Math.max(...numbers);

    let length = numbers.length


    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray