import { createContext } from 'react';

export interface AlgorithmContextType {
    inputArray: Array<number>;
    selectedAlgorithm: string;
    setSelectedAlgorithm: (algorithm: string) => void;
    runSorting: (input: Array<number>) => void;
}

export const AlgorithmContext = createContext<AlgorithmContextType | undefined>(undefined);
