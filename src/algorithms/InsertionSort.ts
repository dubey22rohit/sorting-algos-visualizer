import { AnimationArrayType } from '@/lib/types';

const insertionSort = (input: Array<number>, animations: AnimationArrayType) => {
    for (let i = 1; i < input.length; i++) {
        const currVal = input[i];
        let j = i - 1;
        while (j >= 0 && input[j] > currVal) {
            animations.push([[j, j + 1, i], false]);
            input[j + 1] = input[j];
            animations.push([[j + 1, input[j]], true]);
            j--;
        }
        input[j + 1] = currVal;
        animations.push([[j + 1, currVal], true]);
    }
};

export const runInsertionSort = (
    input: Array<number>,
    runSorting: (animations: AnimationArrayType) => void,
) => {
    const animations: AnimationArrayType = [];
    const tempArray = input.slice();
    insertionSort(tempArray, animations);
    runSorting(animations);
};
