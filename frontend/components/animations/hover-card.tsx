"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const HoverCard = ({ children, className, onClick }: HoverCardProps) => {
    return (
        <motion.div
            className={cn(
                "rounded-xl bg-white border border-gray-100 p-6 shadow-sm cursor-pointer",
                className
            )}
            whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}
