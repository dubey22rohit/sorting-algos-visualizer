'use client';

import Select from '@/components/Select';
import Slider from '@/components/Slider';

export default function Home() {
    return (
        <main className="h-screen w-screen">
            <div className="flex h-full justify-center">
                <div id="main-content" className="flex max-w-[120rem] w-full flex-col lg:px-0 px-4">
                    <div className="h-[6rem] flex items-center justify-between w-full">
                        <h1 className="text-gray-400 text-2xl font-light md:flex">
                            Sorting Algorithms Visualiser
                        </h1>
                        <div>
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
                </div>
            </div>
        </main>
    );
}
