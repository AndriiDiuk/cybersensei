import { useState } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist//ScrollSmoother";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";

export default function useSmootherScroll(start) {
  const [smoother, setSmoother] = useState();
  const [timeline, setTimeline] = useState(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const context = gsap.context(() => {
      const tl = gsap.timeline({
        //   paused: true,
      });
      setTimeline(tl);
    });

    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: false,
      preventDefault: true,
    });

    setSmoother(smoother);
    return () => context.revert();
  }, [start]);

  return [smoother, timeline];
}
