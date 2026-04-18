"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function calculateCreditLimit(income) {
    if (income <= 200000) return "INR 50,000";
    else if (income > 200000 && income <= 300000) return "INR 75,000";
    else if (income > 300000 && income <= 500000) return "INR 1,000,000";
    else return "Subjective (case-by-case)";
}

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

    const handleApprove = () => {
        setApp({ ...app, status: "Approved" });
        alert(`Application ${app.id} approved!`);
    };

    const handleReject = () => {
        setApp({ ...app, status: "Rejected" });
        alert(`Application ${app.id} rejected!`);
    };

    return (
        <div className="admin-panel" style={{ padding: "20px" }}>
            <h2>Application Detail of <b>{app.name}</b></h2>
            <p><strong>Name:</strong> {app.name}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Card Type:</strong> {app.cardType}</p>
            <p><strong>Status:</strong> {app.status}</p>
            <p><strong>Annual Income:</strong> INR {app.income.toLocaleString()}</p>
            <p><strong>Credit Score:</strong> {app.creditScore}</p>
            <p><strong>Credit Limit:</strong> {calculateCreditLimit(app.income)}</p>

            {app.status === "Pending" && (
                <div style={{ marginTop: "20px" }}>
                    <button
                        onClick={handleApprove}
                        style={{ marginRight: "10px", padding: "8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px" }}
                    >
                        Approve
                    </button>
                    <button
                        onClick={handleReject}
                        style={{ padding: "8px 16px", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px" }}
                    >
                        Reject
                    </button>
                </div>
            )}
        </div>
    );
}
