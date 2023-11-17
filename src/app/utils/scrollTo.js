export const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToSection = (elemRef) => {
  window.scrollTo({
    top: elemRef.current.offsetTop,
    behavior: "smooth",
  });
};
