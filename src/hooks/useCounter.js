import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * useCounter — animates a number from 0 to `target` when the ref enters viewport
 * @param {number} target   - final value
 * @param {number} duration - animation duration in ms (default 1800)
 * @param {string} suffix   - string appended after the number (e.g. "+", "%")
 * @returns {{ ref, display }} - attach ref to element, display is the formatted string
 */
const useCounter = (target, duration = 1800, suffix = "") => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let start = 0;
    const totalFrames = Math.round(duration / 16);
    const increment = target / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return {
    ref,
    display: `${count}${suffix}`,
    value: count,
  };
};

export default useCounter;