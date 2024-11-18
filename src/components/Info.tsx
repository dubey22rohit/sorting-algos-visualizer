interface InfoProps {
    heading: string;
    value: string;
}
const Info = (props: InfoProps) => {
    return (
        <p className="flex w-full text-sm text-black font-bold">
            <span className="w-28 text-white">{props.heading}</span>
            <span>{props.value}</span>
        </p>
    );
};
export default Info;
