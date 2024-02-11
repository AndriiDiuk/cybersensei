import React, { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

export default function useSmoother() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
