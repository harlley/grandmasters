import React from "react";

type ErrorProps = {
  message?: string;
};

export const Error: React.FC<ErrorProps> = ({
  message = "Oops! Could not load the requested data.",
}) => {
  return (
    <div className="p-6 text-center">
      <div className="p-4 h-[409px] flex items-center justify-center">
        <p className="text-sm font-medium text-red-700">{message}</p>
      </div>
    </div>
  );
};
