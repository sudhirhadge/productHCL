"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="w-full border-b bg-blue sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1
                    className="font-semibold text-lg cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    Welcome to Solutions !
                </h1>

                {/* nav */}
                <div className="flex gap-3 text-sm">
                    <button onClick={() => router.push("/apply")}>
                        Apply
                    </button>
                    <button onClick={() => router.push("/track")}>
                        Track
                    </button>
                    <button onClick={() => router.push("/admin")}>
                        Admin
                    </button>
                </div>
            </div>
        </header>
    );
}