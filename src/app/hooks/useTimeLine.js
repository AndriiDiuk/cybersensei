import { useState } from "react";
import { gsap } from "gsap-trial";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";

export default function useTimeLine(start) {
  const [timeline, setTimeline] = useState(null);

  useIsomorphicLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        //   paused: true,
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, [start]);

  return timeline;
}
