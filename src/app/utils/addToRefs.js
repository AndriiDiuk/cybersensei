export const addToRefs = (element, arrRef) => {
  element && !arrRef.includes(element) && arrRef.push(element);
};
