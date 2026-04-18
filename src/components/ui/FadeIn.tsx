import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../utils/cn';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  className,
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case 'up':
        y = distance;
        break;
      case 'down':
        y = -distance;
        break;
      case 'left':
        x = distance;
        break;
      case 'right':
        x = -distance;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, elementRef);

    // Refresh scroll triggers in case of layout shifts
    ScrollTrigger.refresh();

    return () => {
      ctx.revert(); // Safely reverts all animations and triggers created inside the context
    };
  }, [delay, direction, distance]);

  return (
    <div ref={elementRef} className={cn('will-change-transform opacity-0', className)}>
      {children}
    </div>
  );
}
