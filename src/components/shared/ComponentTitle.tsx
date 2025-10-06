import React from "react";

const ComponentTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`text-[28px] md:text-[40px] font-normal   ${className} flex items-center gap-2`}
    >
      {children}
    </div>
  );
};

export default ComponentTitle;
