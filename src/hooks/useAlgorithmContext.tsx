import { AlgorithmContext, AlgorithmContextType } from '@/context/AlgorithmContext';
import { useContext } from 'react';

export const useAlgorithmContext = (): AlgorithmContextType => {
    const context = useContext(AlgorithmContext);
    if (!context) {
        throw new Error('no context');
    }
    return context;
};
