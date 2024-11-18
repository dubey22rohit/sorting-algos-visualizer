import { AnimationArrayType } from '@/lib/types';

const bubbleSort = (input: Array<number>, animations: AnimationArrayType) => {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input.length - i - 1; j++) {
            if (input[j] > input[j + 1]) {
                animations.push([[j, input[j + 1]], true]);
                animations.push([[j + 1, input[j]], true]);
                [[input[j], input[j + 1]]] = [[input[j + 1], input[j]]];
            }
        }
    }
};

export const runBubbleSort = (
    input: Array<number>,
    runSorting: (animations: AnimationArrayType) => void,
) => {
    const animations: AnimationArrayType = [];
    const tempArray = input.slice();
    bubbleSort(tempArray, animations);
    runSorting(animations);
};
