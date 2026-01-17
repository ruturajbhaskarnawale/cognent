import { create } from 'zustand';

export interface QuoteState {
    step: number;
    services: string[];
    timeline: string; // 'standard' | 'urgent'
    email: string;
    setStep: (step: number) => void;
    toggleService: (serviceId: string) => void;
    setTimeline: (timeline: string) => void;
    setEmail: (email: string) => void;
    reset: () => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
    step: 1,
    services: [],
    timeline: 'standard',
    email: '',
    setStep: (step) => set({ step }),
    toggleService: (serviceId) =>
        set((state) => {
            const exists = state.services.includes(serviceId);
            if (exists) {
                return { services: state.services.filter((id) => id !== serviceId) };
            }
            return { services: [...state.services, serviceId] };
        }),
    setTimeline: (timeline) => set({ timeline }),
    setEmail: (email) => set({ email }),
    reset: () => set({ step: 1, services: [], timeline: 'standard', email: '' }),
}));
