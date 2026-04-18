"use client";

import { useEffect, useState } from "react";
import "./admin.css"
import Link from "next/link"

export default function ApplicationList() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch("/applications.json")
            .then((res) => res.json())
            .then((data) => setApplications(data));
    }, []);

    return (
        <div className="admin-panel">
            <h1 className="h1-font">Credit Card Applications</h1>
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
                    {applications.map((app) => (
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
