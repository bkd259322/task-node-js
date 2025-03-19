function findSecondLargest(arr) {
    let max = -1, secondMax = -1;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num; 
        }
    }

    return secondMax;
}


console.log(findSecondLargest([12, 35, 1, 10, 34, 1])); // Output: 34

