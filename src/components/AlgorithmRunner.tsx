'use client';
import { AlgorithmContext } from '@/context/AlgorithmContext';
import { AlgorithmType, AnimationArrayType } from '@/lib/types';
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

    const runSorting = (animations: AnimationArrayType) => {
        const arrayBars = document.getElementsByClassName(
            'array-bar',
        ) as HTMLCollectionOf<HTMLElement>;

        const updateClassList = (
            indexes: Array<number>,
            addClassName: string,
            removeClassName: string,
        ) => {
            indexes.forEach((index) => {
                arrayBars[index].classList.add(addClassName);
                arrayBars[index].classList.remove(removeClassName);
            });
        };

        const updateHeight = (barIndex: number, modifiedHeight?: number) => {
            arrayBars[barIndex].style.height = `${modifiedHeight}px`;
        };

        animations.forEach((animation, index) => {
            setTimeout(() => {
                const [barIndexes, isSwap] = animation;
                if (!isSwap) {
                    updateClassList(barIndexes, 'updated-bar-color', 'bar-color');
                } else {
                    const [barIndex, updatedHeight] = barIndexes;
                    updateHeight(barIndex, updatedHeight);
                }
            }, index);
        });
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
