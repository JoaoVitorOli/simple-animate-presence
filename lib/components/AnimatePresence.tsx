import React from 'react';
import { useRef, useState, ReactNode, useEffect } from 'react';

interface AnimatePresenceProps {
  children: ReactNode;
  isOpened: boolean;
}

export function AnimatePresence({
  children,
  isOpened
}: AnimatePresenceProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [shoundRenderComponent, setShoundRenderComponent] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isOpened && elementRef.current) {
      elementRef.current.style.opacity = '0';
      elementRef.current.style.transition = 'opacity 300ms';

      timer = setTimeout(() => {
        if (elementRef.current) setShoundRenderComponent(false);
      }, 200);
    }

    if (isOpened && elementRef.current) {
      setShoundRenderComponent(true);

      timer = setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.style.opacity = '1';
          elementRef.current.style.transition = 'opacity 300ms';
        }
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [isOpened]);

  return (
    <div
      ref={elementRef}
    >
      {shoundRenderComponent && (
        <>
          {children}
        </>
      )}
    </div>
  );
}
