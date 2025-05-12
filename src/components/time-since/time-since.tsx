import React, { useEffect, useState } from "react";
import { TimeSinceProps } from "./time-since.types";
import { formatElapsedTime } from "./format-elapsed-time";

export const TimeSince = ({ timestamp }: TimeSinceProps) => {
  const [elapsed, setElapsed] = useState(() => Date.now() - timestamp * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Date.now() - timestamp * 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{formatElapsedTime(elapsed)}</span>;
};
