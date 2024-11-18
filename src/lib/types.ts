export type AlgorithmType =
    | 'bubbleSort'
    | 'insertionSort'
    | 'selectionSort'
    | 'mergeSort'
    | 'quickSort';

export type AlgorithmInfo = {
    title: string;
    description: string;
    bestCase: string;
    averageCase: string;
    worstCase: string;
};

export type AlgorithmsDataType = {
    [key in AlgorithmType]: AlgorithmInfo;
};

export type AlgorithmOptionsType = {
    value: string;
    label: string;
};

export type AnimationArrayType = Array<[Array<number>, boolean]>;
