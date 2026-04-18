"use client";

import { useEffect, useState } from "react";
import "./admin.css"
import Link from "next/link"

export default function ApplicationList() {
    const [applications, setApplications] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        fetch("/applications.json")
            .then((res) => res.json())
            .then((data) => setApplications(data));
    }, []);

    // Apply filter logic
    const filteredApps =
        filter === "All"
            ? applications
            : applications.filter((app) => app.status === filter)

    return (
        <div className="admin-panel">
            <div className="filter-btn">
                <h1 className="h1-font">Credit Card Applications</h1>
                <div>
                    {/* Filter Buttons */}
                    <div style={{ marginBottom: "20px" }}>
                        <button
                            onClick={() => setFilter("All")}
                            style={{ marginRight: "10px", padding: "8px 16px" }}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter("Pending")}
                            style={{ marginRight: "10px", borderRadius: "5px", padding: "8px 16px", backgroundColor: "orange", color: "white" }}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => setFilter("Approved")}
                            style={{ marginRight: "10px", borderRadius: "5px", padding: "8px 16px", backgroundColor: "green", color: "white" }}
                        >
                            Approved
                        </button>
                        <button
                            onClick={() => setFilter("Rejected")}
                            style={{ padding: "8px 16px", borderRadius: "5px", backgroundColor: "red", color: "white" }}
                        >
                            Rejected
                        </button>
                    </div>
                </div>
            </div>
            <table className="application-table" border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Card Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredApps.map((app) => (
                        <tr key={app.id}>
                            <td>{app.id}</td>
                            <td>
                                <Link href={`/admin/admincomponent/applications/${app.id}`}>
                                    {app.name}
                                </Link>
                            </td>
                            <td>{app.email}</td>
                            <td>{app.cardType}</td>
                            <td>{app.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
