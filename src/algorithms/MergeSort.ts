import { AnimationArrayType } from '@/lib/types';

function merge(
    input: number[],
    start: number,
    mid: number,
    end: number,
    animations: AnimationArrayType,
) {
    const left = input.slice(start, mid);
    const right = input.slice(mid, end);

    let i = 0;
    let j = 0;
    let k = start;
    while (i < left.length && j < right.length) {
        animations.push([[start + i, mid + j], false]);
        if (left[i] <= right[j]) {
            animations.push([[k, left[i]], true]);
            input[k] = left[i];
            i += 1;
        } else {
            animations.push([[k, right[j]], true]);
            input[k] = right[j];
            j += 1;
        }
        k++;
    }
    while (i < left.length) {
        animations.push([[start + i], false]);
        animations.push([[k, left[i]], true]);
        input[k] = left[i];
        i += 1;
        k += 1;
    }
    while (j < right.length) {
        animations.push([[mid + j], false]);
        animations.push([[k, right[j]], true]);
        input[k] = right[j];
        j += 1;
        k += 1;
    }
}
const mergeSort = (input: Array<number>, animations: AnimationArrayType) => {
    for (let k = 1; k < input.length; k = 2 * k) {
        for (let i = 0; i < input.length; i += 2 * k) {
            const start = i;
            const mid = i + k;
            const end = Math.min(i + 2 * k, input.length);
            merge(input, start, mid, end, animations);
        }
    }
    return animations;
};

export const runMergeSort = (
    input: Array<number>,
    runSorting: (animations: AnimationArrayType) => void,
) => {
    let animations: AnimationArrayType = [];
    const tempArray = input.slice();
    animations = mergeSort(tempArray, animations);
    runSorting(animations);
};
