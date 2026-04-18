"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Card from "../components/Card";
import { useApp } from "../context/AppContext";
import { useApplication } from "../hooks/useApplication";

// small helper (keep inside file → hackathon speed)
const formatCurrency = (num) => {
    if (!num) return "-";
    return `₹ ${Number(num).toLocaleString("en-IN")}`;
};

const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-IN");
};

export default function Review() {
    const router = useRouter();
    const { formData, setResult } = useApp();
    const { apply, loading, error } = useApplication();

    if (!formData) return <div>No data</div>;

    const handleSubmit = async () => {
        try {
            const res = await apply({
                ...formData,
                income: Number(formData.income),
            });

            setResult(res);
            router.push("/result");
        } catch { }
    };

    return (
        <Card className="w-full max-w-md">

            <h2 className="text-lg font-semibold mb-4">
                Review Your Details
            </h2>

            {/* structured fields instead of JSON */}
            <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium">{formData.name}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">DOB</span>
                    <span className="font-medium">
                        {formatDate(formData.dob)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">PAN</span>
                    <span className="font-medium">
                        {/* mask PAN for better UX + basic security */}
                        {formData.pan?.replace(/.(?=.{4})/g, "*")}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Income</span>
                    <span className="font-medium">
                        {formatCurrency(formData.income)}
                    </span>
                </div>

            </div>

            {/* error */}
            {error && (
                <p className="text-red-500 text-sm mt-3">{error}</p>
            )}

            {/* actions */}
            <div className="mt-5 flex gap-2">
                <Button
                    className="bg-gray-200 text-black px-4"
                    onClick={() => router.push("/apply")}
                >
                    Edit
                </Button>

                <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </Button>
            </div>

        </Card>
    );
}