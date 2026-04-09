"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useLeadModal } from "@/context/lead-modal-context";

export function ScrollLeadTrigger() {
  const { openModal, isOpen } = useLeadModal();
  const { scrollYProgress } = useScroll();
  const [hasTriggered, setHasTriggered] = useState(false);

  // Use sessionStorage to ensure it only triggers once per session
  useEffect(() => {
    const sessionTriggered = sessionStorage.getItem("scrollLeadTriggered");
    if (sessionTriggered === "true") {
      setHasTriggered(true);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Trigger when scrolled ~20-25% down (typical transition point from Hero to Insights)
    if (latest > 0.22 && !hasTriggered && !isOpen) {
      openModal("Strategic Engineering Consultation");
      setHasTriggered(true);
      sessionStorage.setItem("scrollLeadTriggered", "true");
    }
  });

  return null; // Invisible components
}
