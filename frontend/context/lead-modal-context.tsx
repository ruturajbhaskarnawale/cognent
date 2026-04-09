"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Modal } from "@/components/ui/modal";
import { CapabilityForm } from "@/components/features/capability-form";

interface LeadModalContextType {
  openModal: (capability?: string) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCapability, setSelectedCapability] = useState("");

  const openModal = (capability: string = "Strategic Engineering Consultation") => {
    setSelectedCapability(capability);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <Modal 
        isOpen={isOpen} 
        onClose={closeModal} 
        title={`Request Capability`}
      >
        <CapabilityForm 
            capability={selectedCapability} 
            onSuccess={closeModal} 
        />
      </Modal>
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
