import { useState, useCallback } from 'react';
export const useCounter = ({ initialValue = 0, step = 1, } = {}) => {
    const [count, setCount] = useState(initialValue);
    const increment = useCallback(() => {
        setCount((prev) => prev + step);
    }, [step]);
    const decrement = useCallback(() => {
        setCount((prev) => prev - step);
    }, [step]);
    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]);
    return { count, increment, decrement, reset };
};
export default useCounter;
//# sourceMappingURL=useCounter.js.map