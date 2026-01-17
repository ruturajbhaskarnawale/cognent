"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ConsentManager() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check local storage
    const consent = localStorage.getItem("agency_consent");
    if (!consent) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const handleAccept = async () => {
    localStorage.setItem("agency_consent", "true");
    setShow(false);
    
    // Log to backend
    try {
        await fetch("http://127.0.0.1:8000/api/v1/compliance/consent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: "all",
                consent: true
            })
        });
    } catch (e) {
        console.error("Failed to log consent", e);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/90 p-4 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/90"
        >
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="space-y-1">
                <p className="text-sm font-medium">We value your privacy.</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    We use cookies to analyze traffic and improve user experience. 
                    This is a DPDP compliant website.
                </p>
            </div>
            <div className="flex gap-4">
                <Button variant="ghost" size="sm" onClick={() => setShow(false)}>
                    Decline
                </Button>
                <Button size="sm" onClick={handleAccept}>
                    Accept All
                </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
