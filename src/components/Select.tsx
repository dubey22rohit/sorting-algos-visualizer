interface SelectProps {
    options: Array<{
        value: string;
        label: string;
    }>;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    isDisabled: boolean;
    defaultValue?: string;
}
const Select = (props: SelectProps) => {
    return (
        <div>
            <select
                onChange={props.handleChange}
                disabled={props.isDisabled}
                className="block appearance-none h-8 w-full text-black border px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={props.defaultValue}
            >
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default Select;
