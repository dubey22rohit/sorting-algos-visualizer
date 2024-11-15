const merge = (input: Array<number>, start: number, end: number) => {
    let mid = start + (end - start) / 2;
    let i = start;
    let j = mid + 1;

    let temp: Array<number> = [];

    while (i <= mid && j <= end) {
        if (input[i] < input[j]) {
            temp.push(input[i]);
            i++;
        } else {
            temp.push(input[j]);
            j++;
        }
    }

    while (i <= mid) {
        temp.push(input[i]);
        i++;
    }

    while (j <= end) {
        temp.push(input[j]);
        j++;
    }

    for (let i = start; i <= end; i++) {
        input[start + i] = temp[i];
    }
};
const mergeSort = (input: Array<number>, start: number, end: number) => {
    let mid = start + (end - start) / 2;
    mergeSort(input, start, mid);
    mergeSort(input, mid + 1, end);
    merge(input, start, end);
};
