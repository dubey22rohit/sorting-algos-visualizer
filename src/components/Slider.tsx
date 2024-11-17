interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDisabled: boolean;
}
const Slider = ({ min = 100, max = 400, step = 10, ...props }: SliderProps) => {
    return (
        <div className="flex gap-4 items-center justify-center">
            <span className="text-center text-gray-400">Slow</span>
            <input
                disabled={props.isDisabled}
                type="range"
                min={min}
                max={max}
                step={step}
                onChange={props.handleChange}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-800"
            />
            <span className="text-center text-gray-400">Fast</span>
        </div>
    );
};
export default Slider;
