"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input"
import Button from "../components/Button";
import { useApp } from "../context/AppContext";
import Card from "../components/Card";

export default function Apply() {
    const router = useRouter();
    const { setFormData } = useApp();

    const [data, setData] = useState({
        name: "",
        dob: "",
        pan: "",
        income: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (!data.name || !data.dob || !data.pan) {
            alert("All fields required");
            return;
        }

        setFormData(data);
        router.push("/review");
    };

    return (
        <Card>
            <div className="p-6">
                <Input name="name" label="Name" onChange={handleChange} />
                <Input name="dob" type="date" label="DOB" onChange={handleChange} />
                <Input name="pan" label="PAN" onChange={handleChange} />
                <Input name="income" type="number" label="Income" onChange={handleChange} />
                <Button onClick={handleNext}>Review</Button>
            </div>
        </Card>
    );
}