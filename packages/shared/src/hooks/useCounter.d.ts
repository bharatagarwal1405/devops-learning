export interface UseCounterOptions {
    initialValue?: number;
    step?: number;
}
export interface UseCounterReturn {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}
export declare const useCounter: ({ initialValue, step, }?: UseCounterOptions) => UseCounterReturn;
export default useCounter;
//# sourceMappingURL=useCounter.d.ts.map