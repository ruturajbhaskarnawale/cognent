"use client";

import { useState, useEffect, useCallback } from "react";
import { loginAdmin, verifyAdminToken } from "@/lib/api";

const TOKEN_KEY = "admin_token";

export function useAdminAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState<string | null>(null);

    // Verify token on mount
    useEffect(() => {
        const verifyStoredToken = async () => {
            const token = sessionStorage.getItem(TOKEN_KEY);

            if (!token) {
                setIsLoading(false);
                return;
            }

            try {
                const result = await verifyAdminToken(token);
                if (result.valid) {
                    setIsAuthenticated(true);
                    setUsername(result.username || null);
                } else {
                    // Token invalid, clear it
                    sessionStorage.removeItem(TOKEN_KEY);
                }
            } catch (error) {
                console.error("Token verification failed:", error);
                sessionStorage.removeItem(TOKEN_KEY);
            } finally {
                setIsLoading(false);
            }
        };

        verifyStoredToken();
    }, []);

    const login = useCallback(async (usernameInput: string, password: string) => {
        try {
            const response = await loginAdmin(usernameInput, password);
            sessionStorage.setItem(TOKEN_KEY, response.access_token);
            setIsAuthenticated(true);
            setUsername(usernameInput);
            return { success: true };
        } catch (error) {
            console.error("Login failed:", error);
            return {
                success: false,
                error: error instanceof Error ? error.message : "Login failed"
            };
        }
    }, []);

    const logout = useCallback(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        setIsAuthenticated(false);
        setUsername(null);
    }, []);

    const getToken = useCallback(() => {
        return sessionStorage.getItem(TOKEN_KEY);
    }, []);

    return {
        isAuthenticated,
        isLoading,
        username,
        login,
        logout,
        getToken,
    };
}
