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
    const [sortingSpeed, setSortingSpeed] = useState<number>(100);

    useEffect(() => {
        init();
        window.addEventListener('resize', init);
        return () => {
            window.removeEventListener('resize', init);
        };
    }, []);

    const init = () => {
        const contentContainer = document.getElementById('main-content');
        const screenWidth = contentContainer?.getBoundingClientRect().width || 1920;
        const screenHeight = contentContainer?.getBoundingClientRect().height || 1080;

        const numBars = screenWidth / 10;
        const maxLineHeight = Math.max(screenHeight * 0.5, 100);

        const tempArr: Array<number> = [];
        for (let i = 0; i < numBars; i++) {
            tempArr.push(generateRandomNumberInRange(40, maxLineHeight));
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
        const invertedSortingSpeed = (1 / sortingSpeed) * 200;
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
                    setTimeout(
                        () => updateClassList(barIndexes, 'bar-color', 'updated-bar-color'),
                        invertedSortingSpeed,
                    );
                } else {
                    const [barIndex, updatedHeight] = barIndexes;
                    updateHeight(barIndex, updatedHeight);
                }
            }, invertedSortingSpeed * index);
        });

        setTimeout(() => {
            Array.from(arrayBars).forEach((bar) => {
                bar.classList.add('bar-animation', 'updated-bar-color');
                bar.classList.remove('bar-color');
            });
            setTimeout(() => {
                Array.from(arrayBars).forEach((bar) => {
                    bar.classList.remove('bar-animation', 'updated-bar-color');
                    bar.classList.add('bar-color');
                });
            }, 1000);
        }, animations.length * invertedSortingSpeed);
    };

    const contextValue = {
        inputArray,
        selectedAlgorithm,
        runSorting,
        setSelectedAlgorithm,
        sortingSpeed,
        setSortingSpeed,
        init,
    };

    return (
        <AlgorithmContext.Provider value={contextValue}>{props.children}</AlgorithmContext.Provider>
    );
};
