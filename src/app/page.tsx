'use client';

import Info from '@/components/Info';
import Select from '@/components/Select';
import Slider from '@/components/Slider';
import { useAlgorithmContext } from '@/hooks/useAlgorithmContext';
import { AlgorithmType } from '@/lib/types';
import { runSortingAlgorithm, sortingAlgorithmsInfo, sortingAlgorithmsOptions } from '@/lib/utils';

export default function Home() {
    const {
        inputArray,
        runSorting,
        selectedAlgorithm,
        setSelectedAlgorithm,
        sortingSpeed,
        setSortingSpeed,
        init,
    } = useAlgorithmContext();

    const handleRun = () => {
        runSortingAlgorithm(selectedAlgorithm, inputArray, runSorting);
    };

    return (
        <main className="h-screen w-screen p-4">
            <div className="flex h-full justify-center">
                <div id="main-content" className="flex max-w-[120rem] w-full flex-col lg:px-0 px-4">
                    <div className="h-[6rem] flex items-center justify-between w-full">
                        <h1 className="text-gray-400 text-2xl font-light">
                            Sorting Algorithms Visualiser
                        </h1>
                        <div className="flex items-center justify-center gap-4">
                            <Select
                                isDisabled={false}
                                defaultValue={selectedAlgorithm}
                                options={sortingAlgorithmsOptions}
                                handleChange={(e) => {
                                    setSelectedAlgorithm(e.target.value as AlgorithmType);
                                }}
                            />
                            <Slider
                                isDisabled={false}
                                value={sortingSpeed}
                                handleChange={(e) => {
                                    setSortingSpeed(parseInt(e.target.value));
                                }}
                            />
                            <button
                                className="flex items-center justify-center bg-secondaryTint p-2 rounded-lg"
                                onClick={handleRun}
                            >
                                Run
                            </button>
                            <button
                                className="flex items-center justify-center bg-primaryTint p-2 rounded-lg"
                                onClick={init}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-12 bg-secondaryBackground p-6 rounded-lg">
                        <div className="flex flex-col items-start justify-start w-2/3 p-4">
                            <h3 className="text-xl font-bold">
                                {sortingAlgorithmsInfo[selectedAlgorithm].title}
                            </h3>
                            <p className="text-gray-400 pt-2 text-base">
                                {sortingAlgorithmsInfo[selectedAlgorithm].description}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-between bg-purple-600 rounded-lg w-max p-4">
                            <h2 className="text-center font-bold text-xl mb-2">Time Complexity</h2>
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
                    </div>
                    <div className="w-full mx-auto flex justify-center items-end px-4">
                        {inputArray.map((value, index) => (
                            <div
                                key={index}
                                className="array-bar w-1.5 mx-0.5"
                                style={{ height: `${value}px` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
