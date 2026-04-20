export default function Input({ label, ...props }) {
    return (
        <div className="mb-3">
            <label className="block text-sm mb-1">{label}</label>
            <input
                className="w-full border p-2 rounded"
                {...props}
            />
        </div>
    );
}