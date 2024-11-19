import { AlgorithmType, AnimationArrayType } from '@/lib/types';
import { createContext } from 'react';

export interface AlgorithmContextType {
    inputArray: Array<number>;
    selectedAlgorithm: AlgorithmType;
    setSelectedAlgorithm: (algorithm: AlgorithmType) => void;
    runSorting: (animations: AnimationArrayType) => void;
    sortingSpeed: number;
    setSortingSpeed: (sortingSpeed: number) => void;
    init: () => void;
}

export const AlgorithmContext = createContext<AlgorithmContextType | undefined>(undefined);
