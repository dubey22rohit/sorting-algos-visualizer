'use client';

import Info from '@/components/Info';
import Select from '@/components/Select';
import Slider from '@/components/Slider';
import { generateRandomNumberInRange } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
    const [arrayToSort, setArrayToSort] = useState<Array<number>>([]);
    useEffect(() => {
        const tempArr: Array<number> = [];
        for (let i = 0; i < 100; i++) {
            tempArr.push(generateRandomNumberInRange(40, 100));
        }
        setArrayToSort(tempArr);
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
                                options={[
                                    { value: 'bubbleSort', label: 'Bubble Sort' },
                                    { value: 'insertionSort', label: 'Insertion Sort' },
                                    { value: 'selectionSort', label: 'Selection Sort' },
                                    { value: 'mergeSort', label: 'Merge Sort' },
                                    { value: 'quickSort', label: 'Quick Sort' },
                                ]}
                                handleChange={(e) => {
                                    console.log(e);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <h2>Time Complexity</h2>
                        <div className="flex flex-col gap-4">
                            <Info heading="Best Case" value="O(nlogn)" />
                            <Info heading="Average Case" value="O(n^2)" />
                            <Info heading="Worst Case" value="O(n^2)" />
                        </div>
                    </div>
                    <div className="flex justify-center items-end">
                        {arrayToSort.map((value, index) => (
                            <div
                                key={index}
                                className="w-1 mx-0.5 bg-blue-900"
                                style={{ height: `${value}px` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
