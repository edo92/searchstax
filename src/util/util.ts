export const debounce = (func: (val: string) => unknown, delay: number) => {
  let timer: NodeJS.Timeout;
  return (args: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(args), delay);
  };
};
