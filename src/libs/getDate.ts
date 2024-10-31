export const getDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
};
