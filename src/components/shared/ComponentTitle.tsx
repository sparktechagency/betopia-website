import React from "react";

const ComponentTitle = ({children , className}:{children:React.ReactNode , className:string}) => {
    return (
        <p className={`text-[40px] font-normal   ${className} flex items-center gap-2`}>
            {children}
        </p>
    );
};
 
export default ComponentTitle;