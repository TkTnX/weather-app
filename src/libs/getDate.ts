export const getDate = (date: Date, monthLen: "long" | "short") => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: monthLen,
  });
};
