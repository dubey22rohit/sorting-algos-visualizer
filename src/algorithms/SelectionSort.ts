const selectionSort = (input: Array<number>) => {
    for (let i = 0; i < input.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }
        [input[i], input[minIndex]] = [input[minIndex], input[i]];
    }
};
