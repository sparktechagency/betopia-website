
const OutlineButton = ({
    children,
    className,
    type,
}: {
    children: React.ReactNode;
    className: string;
    type?: "submit" | "reset" | "button";
}) => {
    return (
        <button
            className={`border border-b-[3px] border-[#F69348] px-3 py-2.5  lg:text-lg  rounded-lg  ${className}`}
            type={type || "button"}
        >
            {children}
        </button>
    );
};

export default OutlineButton;