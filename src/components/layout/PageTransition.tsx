"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // Scroll to top on page change, or to hash if present
  useEffect(() => {
    if (window.location.hash) {
      // Wait for page transition AND render to complete
      const scrollToHash = () => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found yet, try again
          setTimeout(scrollToHash, 100);
        }
      };
      // Wait for AnimatePresence transition to complete (100ms exit + 100ms enter) + buffer
      setTimeout(scrollToHash, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
