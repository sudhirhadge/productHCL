"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import Card from "./components/Card";
import { AppProvider } from "./context/AppContext";

export default function Home() {
  const router = useRouter();

  // fake auth
  // localStorage.setItem("token", "mock-jwt");

  return (
    <Card>
      <div>
        <h1 className="text-xl mb-4">Credit Card App</h1>
        <Button onClick={() => router.push("/apply")}>
          Apply Now
        </Button>
      </div>

    </Card>

  );
}