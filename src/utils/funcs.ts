export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getCurrentRemSize = () =>
  parseFloat(getComputedStyle(document.documentElement).fontSize);

export const pxToRem = (px: number) => px / getCurrentRemSize();
export const remToPx = (rem: number) => rem * getCurrentRemSize();
export const vwToPx = (percent: number) => (percent * window.innerWidth) / 100;
export const vhToPx = (percent: number) => (percent * window.innerHeight) / 100;
export const twToPx = (tailwind: number) => remToPx(tailwind * 0.25);
