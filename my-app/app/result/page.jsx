"use client";

import Card from "../components/Card";
import { useApp } from "../context/AppContext";


export default function Result() {
    const { result } = useApp();

    if (!result) return <div>No result</div>;

    return (
        <Card>
            <div className="p-6">
                <h2>Status: {result.status}</h2>
                <p>Limit: {result.limit}</p>
                <p>Score: {result.creditScore}</p>
                <p>ID: {result.id}</p>

                {/* important for tracking */}
                <p className="text-sm mt-3">
                    Save this ID to track your application
                </p>
            </div>

        </Card>
    );
}