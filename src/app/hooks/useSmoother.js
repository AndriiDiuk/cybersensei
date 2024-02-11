// import useWindowSize from "../hooks/useWindowSize.js";
// import { useEffect, useRef } from "react";

// export default function useSmoother(scrollContainer) {
//   //Hook to grab window size
//   const size = useWindowSize();

//   // Configs
//   const data = {
//     ease: 0.05,
//     current: 100,
//     previous: 0,
//     rounded: 0,
//   };

//   // Run scrollrender once page is loaded.
//   useEffect(() => {
//     requestAnimationFrame(() => skewScrolling());
//   }, []);

//   //set the height of the body.
//   useEffect(() => {
//     setBodyHeight();
//   }, [size.height]);

//   //Set the height of the body to the height of the scrolling div
//   const setBodyHeight = () => {
//     document.body.style.height = `${
//       scrollContainer.current.getBoundingClientRect().height
//     }px`;
//   };

//   // Scrolling
//   const skewScrolling = () => {
//     //Set Current to the scroll position amount
//     data.current = window.scrollY;
//     // Set Previous to the scroll previous position
//     data.previous += (data.current - data.previous) * data.ease;
//     // Set rounded to
//     data.rounded = Math.round(data.previous * 100) / 100;

//     // Difference between
//     const difference = data.current - data.rounded;
//     const acceleration = difference / size.width;
//     const velocity = +acceleration;
//     const skew = velocity * 7.5;

//     //Assign skew and smooth scrolling to the scroll container
//     scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) `;

//     //loop vai raf
//     requestAnimationFrame(() => skewScrolling());
//   };
// }
