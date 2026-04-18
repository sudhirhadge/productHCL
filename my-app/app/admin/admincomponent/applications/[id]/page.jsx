"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ApplicationDetail() {
    const { id } = useParams();
    const [app, setApp] = useState(null);

    useEffect(() => {
        fetch("/applications.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((a) => a.id.toString() === id);
                setApp(found);
            });
    }, [id]);

    if (!app) return <h2>Application not found</h2>;

    return (
        <div className="admin-panel">
            <h2>Application Details of <b>{app.name}</b></h2>
            <p><strong>Name:</strong> {app.name}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Card Type:</strong> {app.cardType}</p>
            <p><strong>Status:</strong> {app.status}</p>
        </div>
    );
}
