
const OutlineButton = ({children , className}:{children:React.ReactNode , className:string}) => {
    return (
        <button className={`border border-b-[3px] border-[#F69348] px-3 py-2.5  lg:text-lg  rounded-lg  ${className}`}>
            {children}
        </button>
    );
};

export default OutlineButton;