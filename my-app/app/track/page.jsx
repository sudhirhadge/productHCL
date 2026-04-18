"use client";

import { useState } from "react";
import { getApplicationById } from "../services/applicationService";
import Button from "../components/Button";

export default function Track() {
    const [id, setId] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const handleTrack = async () => {
        try {
            setError("");
            const res = await getApplicationById(id);

            if (!res) {
                setError("Invalid ID");
                return;
            }

            setData(res);
        } catch {
            setError("Failed to fetch");
        }
    };

    return (
        <div className="p-6">
            <input
                className="border p-2 mr-2"
                placeholder="Enter Application ID"
                onChange={(e) => setId(e.target.value)}
            />

            <Button onClick={handleTrack}>Track</Button>

            {error && <p className="text-red-500">{error}</p>}

            {data && (
                <div className="mt-4">
                    <p>Status: {data.status}</p>
                    <p>Limit: {data.limit}</p>
                </div>
            )}
        </div>
    );
}