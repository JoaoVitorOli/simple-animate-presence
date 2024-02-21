import React from "react";
import { useRef, useState, ReactNode, useEffect } from "react";

interface AnimatePresenceProps {
  children: ReactNode;
  isOpened: boolean;
  options?: {
    axix: "x" | "y";
    from: string;
    to: string;
  };
}

export function AnimatePresence({
  children,
  isOpened,
  options,
}: AnimatePresenceProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [shoundRenderComponent, setShoundRenderComponent] = useState(false);

  function handleFadeAnimation() {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    if (!isOpened && elementRef.current) {
      elementRef.current.style.opacity = "0";
      elementRef.current.style.transition = "opacity 300ms";

      timer = setTimeout(() => {
        if (elementRef.current) setShoundRenderComponent(false);
      }, 200);
    }

    if (isOpened && elementRef.current) {
      setShoundRenderComponent(true);

      timer = setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.style.opacity = "1";
          elementRef.current.style.transition = "opacity 300ms";
        }
      }, 50);
    }

    return timer;
  }

  function handleSlideAnimation() {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    if (typeof options === "undefined") return;

    if (!isOpened && elementRef.current) {
      elementRef.current.style.transform = `translate${options.axix.toUpperCase()}(${options.from
        })`;
      elementRef.current.style.transition = "transform 300ms";

      timer = setTimeout(() => {
        if (elementRef.current) setShoundRenderComponent(false);
      }, 200);
    }

    if (isOpened && elementRef.current) {
      setShoundRenderComponent(true);

      timer = setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.style.transform = `translate${options.axix.toUpperCase()}(${options.to
            })`;
          elementRef.current.style.transition = "transform 300ms";
        }
      }, 50);
    }

    return timer;
  }

  useEffect(() => {
    if (typeof options === "undefined") {
      const timerAfter = handleFadeAnimation();

      return () => clearTimeout(timerAfter);
    }

    const timerAfter = handleSlideAnimation();

    return () => clearTimeout(timerAfter);
  }, [isOpened]);

  return <div ref={elementRef}>{shoundRenderComponent && <>{children}</>}</div>;
}
