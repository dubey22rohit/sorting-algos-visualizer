import { AnimationArrayType } from '@/lib/types';

const selectionSort = (input: Array<number>, animations: AnimationArrayType) => {
    for (let i = 0; i < input.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < input.length; j++) {
            animations.push([[j, i], false]);
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }
        animations.push([[i, input[minIndex]], true]);
        animations.push([[minIndex, input[i]], true]);
        [input[i], input[minIndex]] = [input[minIndex], input[i]];
    }
};

export const runSelectionSort = (
    input: Array<number>,
    runSorting: (animations: AnimationArrayType) => void,
) => {
    const animations: AnimationArrayType = [];
    const tempArray = input.slice();
    selectionSort(tempArray, animations);
    runSorting(animations);
};
