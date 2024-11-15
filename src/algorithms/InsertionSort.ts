const insertionSort = (input: Array<number>) => {
    for (let i = 1; i < input.length; i++) {
        const currVal = input[i];
        let j = i - 1;
        while (j >= 0 && input[j] > currVal) {
            input[j + 1] = input[j];
            j--;
        }
        input[j + 1] = currVal;
    }
};
