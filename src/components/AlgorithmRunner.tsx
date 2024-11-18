import { ReactNode, useState } from 'react';

interface AlgorithmRunnerProps {
    children: ReactNode;
}
export const AlgorithmRunner = (props: AlgorithmRunnerProps) => {
    const [inputArray, setInputArray] = useState<Array<number>>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('');

    const runAlgorithm = () => {
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

    return <div>AlgorithmRunner</div>;
};
