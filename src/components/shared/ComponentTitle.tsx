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
      className={`section-title  font-normal ${className} lg:flex lg:flex-row flex-wrap items-center gap-2`}
    >
      {children}
    </div>
  );
};

export default ComponentTitle;
