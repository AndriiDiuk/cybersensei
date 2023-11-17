export const disabledScrolling = (disable) => {
  disable
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};
