import { useState } from 'react';

// Generates a random digit from min to max (inclusive)
const getRandomDigit = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Custom hook for generating codes based on specified digit range and length.
 */
export const useCodeGenerator = (
    minDigit: number,
    maxDigit: number,
    codeLength: number
) => {
    const [code, setCode] = useState('');
    const [history, setHistory] = useState<string[]>([]);

    /**
     * Generates a new code based on the minDigit, maxDigit, and codeLength.
     * 
     * @returns A newly generated code as a string.
     */
    const generateCode = () => {
        let result = '';
        
        for (let i: number = 0; i < codeLength; ++i) {
            const randomDigit = getRandomDigit(minDigit, maxDigit);
            result = result + randomDigit.toString();
        }

        return result;
    };

    /**
     * Generates the next code and updates the state.
     */
    const getNextCode: () => void = () => {
        // Reset the history when the length meets its threshold of 10.
        if (history.length > 9) {
          setHistory([]);
        } 

        // Generate a new code
        const newCode = generateCode();

        // Check to see if the code generated already exists.
        if (history.includes(newCode)) {
          // If it already exists do nothing.
          return;
        } else {
          setCode(newCode);
          setHistory((history: string[]) => [...history, newCode]);
        }
    };

    return {
      getNextCode,
      code
    };
};
