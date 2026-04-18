export default function Card({ children, className = "" }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div
                className={`
                    w-full 
                    max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
                    rounded-xl 
                    border border-gray-200 
                    bg-red 
                    p-4 sm:p-6 md:p-8
                    shadow-md
                    ${className}
                `}
            >
                {children}
            </div>
        </div>
    );
}