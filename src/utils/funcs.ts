export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
