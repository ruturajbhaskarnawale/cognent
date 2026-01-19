// Icon mapping utility for converting string names to Lucide icon components
// This allows server components to pass icon names as strings to client components

import {
    Brain,
    Bot,
    Wrench,
    Compass,
    Code,
    TrendingUp,
    Zap,
    Database,
    Shield,
    Rocket,
    Target,
    Users,
    BarChart,
    Clock,
    DollarSign,
    CheckCircle,
    Search,
    Settings,
    Lightbulb,
    FileText,
    GitBranch,
    Server,
    Cloud,
    Lock,
    Gauge,
    Smartphone,
    Globe,
    ShoppingCart,
    type LucideIcon
} from "lucide-react";

export const iconMap = {
    Brain,
    Bot,
    Wrench,
    Compass,
    Code,
    TrendingUp,
    Zap,
    Database,
    Shield,
    Rocket,
    Target,
    Users,
    BarChart,
    Clock,
    DollarSign,
    CheckCircle,
    Search,
    Settings,
    Lightbulb,
    FileText,
    GitBranch,
    Server,
    Cloud,
    Lock,
    Gauge,
    Smartphone,
    Globe,
    ShoppingCart,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName): LucideIcon {
    return iconMap[name];
}
