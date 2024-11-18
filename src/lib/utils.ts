import { runBubbleSort } from '@/algorithms/BubbleSort';
import { runInsertionSort } from '@/algorithms/InsertionSort';
import { runSelectionSort } from '@/algorithms/SelectionSort';
import {
    AlgorithmOptionsType,
    AlgorithmsDataType,
    AlgorithmType,
    AnimationArrayType,
} from './types';

export const generateRandomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const sortingAlgorithmsOptions: Array<AlgorithmOptionsType> = [
    { value: 'bubbleSort', label: 'Bubble Sort' },
    { value: 'insertionSort', label: 'Insertion Sort' },
    { value: 'selectionSort', label: 'Selection Sort' },
    { value: 'mergeSort', label: 'Merge Sort' },
    { value: 'quickSort', label: 'Quick Sort' },
];

export const sortingAlgorithmsInfo: AlgorithmsDataType = {
    bubbleSort: {
        title: 'Bubble Sort',
        description:
            'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
        bestCase: 'O(n) (when the list is already sorted; only one pass is required)',
        averageCase: 'O(n^2)',
        worstCase: 'O(n²) (when the list is in reverse order)',
    },
    insertionSort: {
        title: 'Insertion Sort',
        description:
            'Builds the sorted array one element at a time by picking each element and placing it into its correct position relative to the already sorted portion.',
        bestCase: 'O(n) (when the list is already sorted; only comparisons are needed)',
        averageCase: 'O(n^2)',
        worstCase: 'O(n²) (when the list is in reverse order)',
    },
    selectionSort: {
        title: 'Selection Sort',
        description:
            'Divides the list into a sorted and an unsorted section. Finds the minimum (or maximum) in the unsorted section and swaps it into the correct position.',
        bestCase: 'O(n²)',
        averageCase: 'O(n²)',
        worstCase: 'O(n²)',
    },
    mergeSort: {
        title: 'Merge Sort',
        description:
            'A divide-and-conquer algorithm that splits the array into halves, recursively sorts them, and then merges the sorted halves.',
        bestCase: 'O(nlogn)',
        worstCase: 'O(nlogn)',
        averageCase: 'O(nlogn)',
    },
    quickSort: {
        title: 'Quick Sort',
        description:
            "A divide-and-conquer algorithm that selects a 'pivot' and partitions the array into two subarrays, recursively sorting them.",
        bestCase: 'O(nlogn) (when the pivot divides the array into roughly equal halves)',
        worstCase:
            'O(n²) (when the pivot is the smallest or largest element, leading to unbalanced partitions)',
        averageCase: 'O(nlogn)',
    },
};

export const runSortingAlgorithm = (
    selectedAlgo: AlgorithmType,
    input: Array<number>,
    runSorting: (animations: AnimationArrayType) => void,
) => {
    switch (selectedAlgo) {
        case 'bubbleSort':
            runBubbleSort(input, runSorting);
        case 'insertionSort':
            runInsertionSort(input, runSorting);
        case 'selectionSort':
            runSelectionSort(input, runSorting);
    }
};
