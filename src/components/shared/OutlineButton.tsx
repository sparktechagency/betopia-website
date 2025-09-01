
const OutlineButton = ({children , className}:{children:React.ReactNode , className?:string}) => {
    return (
        <button className={`border border-b-2 border-[#F69348] px-3 h-10 text-[#F69348] lg:text-lg  rounded-lg  ${className}`}>
            {children}
        </button>
    );
};

export default OutlineButton;