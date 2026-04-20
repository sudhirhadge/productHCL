export default function Footer() {
    return (
        <footer className="w-full border-t mt-10 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-center text-gray-500">
                © {new Date().getFullYear()} Credit Card Demo
            </div>
        </footer>
    );
}