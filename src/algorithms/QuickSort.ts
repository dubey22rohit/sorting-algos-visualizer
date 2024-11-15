const partition = (input: Array<number>, start: number, end: number): number => {
    let pivot = input[start];
    let count = 0;
    for (let i = start + 1; i <= end; i++) {
        if (input[i] <= pivot) {
            count++;
        }
    }

    let pivotIndex = start + count;
    [input[start], input[pivotIndex]] = [input[pivotIndex], input[start]];

    let i = start;
    let j = end;

    while (i <= pivotIndex && j > pivotIndex) {
        while (i <= pivotIndex && input[i] <= pivot) {
            i++;
        }
        while (j > pivotIndex && input[j] > pivot) {
            j--;
        }
        if (i <= pivotIndex && j > pivotIndex) {
            [input[i], input[j]] = [input[j], input[i]];
            i++;
            j--;
        }
    }
    return pivotIndex;
};
const quickSort = (input: Array<number>, start: number, end: number) => {
    if (start >= end) {
        return;
    }
    let pivot = partition(input, start, end);
    quickSort(input, start, pivot - 1);
    quickSort(input, pivot + 1, end);
};
