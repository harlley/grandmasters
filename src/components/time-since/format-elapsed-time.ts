export const formatElapsedTime = (elapsed: number): string => {
  const totalSecs = Math.floor(elapsed / 1000);
  const hours = String(Math.floor(totalSecs / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSecs % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
