'use client';
import { AlgorithmContext } from '@/context/AlgorithmContext';
import { AlgorithmType } from '@/lib/types';
import { generateRandomNumberInRange } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';

interface AlgorithmRunnerProps {
    children: ReactNode;
}
export const AlgorithmRunner = (props: AlgorithmRunnerProps) => {
    const [inputArray, setInputArray] = useState<Array<number>>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmType>('bubbleSort');

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        const tempArr: Array<number> = [];
        for (let i = 0; i < 100; i++) {
            tempArr.push(generateRandomNumberInRange(40, 100));
        }
        setInputArray(tempArr);

        setTimeout(() => {
            const arrayBars = document.getElementsByClassName(
                'array-bar',
            ) as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].classList.remove('updated-bar-color');
                arrayBars[i].classList.add('bar-color');
            }
        }, 0);
    };

    const runSorting = () => {
        const arrayBars = document.getElementsByClassName(
            'array-bar',
        ) as HTMLCollectionOf<HTMLElement>;

        const updateClassList = (indexes: Array<number>) => {
            indexes.forEach((index) => {
                arrayBars[index].classList.add('updated-bar-color');
                arrayBars[index].classList.remove('bar-color');
            });
        };

        const updateHeight = (barIndex: number, modifiedHeight?: number) => {
            arrayBars[barIndex].style.height = `${modifiedHeight}px`;
        };
    };

    const contextValue = {
        inputArray,
        selectedAlgorithm,
        runSorting,
        setSelectedAlgorithm,
    };

    return (
        <AlgorithmContext.Provider value={contextValue}>{props.children}</AlgorithmContext.Provider>
    );
};
