"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState(null);
    const [result, setResult] = useState(null);

    return (
        <AppContext.Provider
            value={{ formData, setFormData, result, setResult }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);