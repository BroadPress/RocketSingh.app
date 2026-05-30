'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TRIGGER_ID = 'back-to-top-trigger';
const TESTIMONIALS_ID = 'testimonials-section';

const BacktoTop = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const trigger = document.getElementById(TRIGGER_ID);
      const testimonials = document.getElementById(TESTIMONIALS_ID);
      const isMobile = window.innerWidth < 768;

      if (isMobile && trigger) {
        if (window.scrollY <= 0) {
          setVisible(false);
          return;
        }

        const rect = trigger.getBoundingClientRect();
        setVisible((prev) => prev || rect.top <= window.innerHeight * 0.78);
        return;
      }

      if (!testimonials) {
        setVisible(false);
        return;
      }

      const testimonialsTop =
        testimonials.getBoundingClientRect().top + window.scrollY;
      setVisible(window.scrollY >= testimonialsTop);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top-btn rounded-full scale-[0.8] cursor-pointer hover:scale-[0.9] active:scale-[0.75] transition-all duration-200 touch-manipulation"
    >
      <img
        src="/icons/next-arrow.svg"
        alt=""
        aria-hidden="true"
        className="h-12 w-12 -rotate-90 pointer-events-none"
      />
    </button>
  );
};

export default BacktoTop;
