import React, { useEffect, useState } from "react";
import { TimeSinceProps } from "./time-since.types";
import { formatElapsedTime } from "./format-elapsed-time";

const TimeSince: React.FC<TimeSinceProps> = ({ timestamp }) => {
  const [elapsed, setElapsed] = useState(() => Date.now() - timestamp * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Date.now() - timestamp * 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{formatElapsedTime(elapsed)}</span>;
};

export default TimeSince;
