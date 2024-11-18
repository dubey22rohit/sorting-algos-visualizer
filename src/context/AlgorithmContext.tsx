import { AlgorithmType } from '@/lib/types';
import { createContext } from 'react';

export interface AlgorithmContextType {
    inputArray: Array<number>;
    selectedAlgorithm: AlgorithmType;
    setSelectedAlgorithm: (algorithm: AlgorithmType) => void;
    runSorting: (input: Array<number>) => void;
}

export const AlgorithmContext = createContext<AlgorithmContextType | undefined>(undefined);
