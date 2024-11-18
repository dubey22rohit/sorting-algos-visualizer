'use client';

import Info from '@/components/Info';
import Select from '@/components/Select';
import Slider from '@/components/Slider';
import { useAlgorithmContext } from '@/hooks/useAlgorithmContext';
import { AlgorithmType } from '@/lib/types';
import { sortingAlgorithmsInfo, sortingAlgorithmsOptions } from '@/lib/utils';

export default function Home() {
    const { inputArray, runSorting, selectedAlgorithm, setSelectedAlgorithm } =
        useAlgorithmContext();

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
                                defaultValue={selectedAlgorithm}
                                options={sortingAlgorithmsOptions}
                                handleChange={(e) => {
                                    setSelectedAlgorithm(e.target.value as AlgorithmType);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-3/4">
                        <h3 className="text-lg">
                            {sortingAlgorithmsInfo[selectedAlgorithm].title}
                        </h3>
                        <p className="text-sm text-gray-500 pt-2">
                            {sortingAlgorithmsInfo[selectedAlgorithm].description}
                        </p>
                    </div>
                    <div>
                        <h2>Time Complexity</h2>
                        <div className="flex flex-col gap-4">
                            <Info
                                heading="Best Case"
                                value={sortingAlgorithmsInfo[selectedAlgorithm].bestCase}
                            />
                            <Info
                                heading="Average Case"
                                value={sortingAlgorithmsInfo[selectedAlgorithm].averageCase}
                            />
                            <Info
                                heading="Worst Case"
                                value={sortingAlgorithmsInfo[selectedAlgorithm].worstCase}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-end">
                        {inputArray.map((value, index) => (
                            <div
                                key={index}
                                className="array-bar w-2 mx-0.5"
                                style={{ height: `${value}px` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
