import { useEffect, useState, useRef } from "react";
// import clsx from "clsx"; // Uncomment if you want to use clsx for cleaner class handling

const FadeInOnScroll = ({ children, className = "", duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(5px)",
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;

