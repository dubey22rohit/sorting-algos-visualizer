import { AnimationArrayType } from '@/lib/types';

const partition = (
    input: Array<number>,
    start: number,
    end: number,
    animations: AnimationArrayType,
): number => {
    let i = start;
    let j = end + 1;
    const pivot = input[start];
    while (true) {
        while (input[++i] <= pivot) {
            if (i === end) break;
            animations.push([[i], false]);
        }
        while (input[--j] >= pivot) {
            if (j === start) break;
            animations.push([[j], false]);
        }
        if (j <= i) break;
        animations.push([[i, input[j]], true]);
        animations.push([[j, input[i]], true]);
        [input[i], input[j]] = [input[j], input[i]];
    }
    animations.push([[start, input[j]], true]);
    animations.push([[j, input[start]], true]);
    [input[start], input[j]] = [input[j], input[start]];
    return j;
};
const quickSort = (
    input: Array<number>,
    start: number,
    end: number,
    animations: AnimationArrayType,
) => {
    if (start >= end) {
        return;
    }
    const pivot = partition(input, start, end, animations);
    quickSort(input, start, pivot - 1, animations);
    quickSort(input, pivot + 1, end, animations);
};

export const runQuickSort = (
    input: Array<number>,
    runSorting: (animations: AnimationArrayType) => void,
) => {
    const animations: AnimationArrayType = [];
    const tempArray = input.slice();
    quickSort(tempArray, 0, tempArray.length - 1, animations);
    runSorting(animations);
};
