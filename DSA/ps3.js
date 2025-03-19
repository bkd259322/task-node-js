function sumZero(n) {
    const result = [];
    for (let i = 0; i < n - 1; i++) {
        result.push(i + 1); 
    }
    result.push(-result.reduce((a, b) => a + b, 0)); 
    return result;
}


console.log(sumZero(5)); 

