"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [hasHash, setHasHash] = useState(false);

  // Check if navigating with hash
  useEffect(() => {
    setHasHash(!!window.location.hash);
  }, [pathname]);

  // Scroll to hash or top
  useEffect(() => {
    if (window.location.hash) {
      // For hash navigation, scroll immediately without delay
      const scrollToHash = () => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found yet, try again quickly
          setTimeout(scrollToHash, 50);
        }
      };
      // Start scrolling immediately
      requestAnimationFrame(scrollToHash);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Skip transition for hash navigation to prevent white screen
  return (
    <motion.div
      initial={{ opacity: hasHash ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: hasHash ? 1 : 0 }}
      transition={{ duration: hasHash ? 0 : 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
