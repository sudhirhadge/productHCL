import { useState } from "react";
import { submitApplication } from "../services/applicationService";

export const useApplication = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const apply = async (data) => {
        try {
            setLoading(true);
            setError("");
            const res = await submitApplication(data);
            return res;
        } catch (e) {
            setError(e.message || "Something went wrong");
            throw e;
        } finally {
            setLoading(false);
        }
    };

    return { apply, loading, error };
};