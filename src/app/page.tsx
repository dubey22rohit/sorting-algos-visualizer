'use client';

import Info from '@/components/Info';
import Select from '@/components/Select';
import Slider from '@/components/Slider';
import { runSortingAnimation } from '@/lib/helpers';
import {
    generateRandomNumberInRange,
    sortingAlgorithmsInfo,
    sortingAlgorithmsOptions,
} from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
    const [arrayToSort, setArrayToSort] = useState<Array<number>>([]);
    const [selectedAlgo, setSelectedAlgo] = useState<string>('bubbleSort');
    useEffect(() => {
        const tempArr: Array<number> = [];
        for (let i = 0; i < 100; i++) {
            tempArr.push(generateRandomNumberInRange(40, 100));
        }
        setArrayToSort(tempArr);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            runSortingAnimation(arrayToSort);
        }, 4000);
    }, []);

    return (
        <main className="h-screen w-screen">
            <div className="flex h-full justify-center">
                <div id="main-content" className="flex max-w-[120rem] w-full flex-col lg:px-0 px-4">
                    <div className="h-[6rem] flex items-center justify-between w-full">
                        <h1 className="text-gray-400 text-2xl font-light md:flex">
                            Sorting Algorithms Visualiser
                        </h1>
                        <div className="flex items-center justify-center gap-4">
                            <Slider
                                isDisabled={false}
                                value={20}
                                handleChange={(e) => {
                                    console.log(e);
                                }}
                            />
                            <Select
                                isDisabled={false}
                                defaultValue={selectedAlgo}
                                options={sortingAlgorithmsOptions}
                                handleChange={(e) => {
                                    setSelectedAlgo(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-3/4">
                        <h3 className="text-lg">{sortingAlgorithmsInfo[selectedAlgo].title}</h3>
                        <p className="text-sm text-gray-500 pt-2">
                            {sortingAlgorithmsInfo[selectedAlgo].description}
                        </p>
                    </div>
                    <div>
                        <h2>Time Complexity</h2>
                        <div className="flex flex-col gap-4">
                            <Info
                                heading="Best Case"
                                value={sortingAlgorithmsInfo[selectedAlgo].bestCase}
                            />
                            <Info
                                heading="Average Case"
                                value={sortingAlgorithmsInfo[selectedAlgo].averageCase}
                            />
                            <Info
                                heading="Worst Case"
                                value={sortingAlgorithmsInfo[selectedAlgo].worstCase}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-end">
                        {arrayToSort.map((value, index) => (
                            <div
                                key={index}
                                className="array-bar w-1 mx-0.5 bg-blue-900"
                                style={{ height: `${value}px` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
