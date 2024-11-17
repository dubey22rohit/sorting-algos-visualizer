interface InfoProps {
    heading: string;
    value: string;
}
const Info = (props: InfoProps) => {
    return (
        <p className="flex w-full text-sm text-gray-500">
            <span className="w-28">{props.heading}</span>
            <span>{props.value}</span>
        </p>
    );
};
export default Info;
