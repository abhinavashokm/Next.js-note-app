export default function Custom500() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold">
                500
            </h1>

            <p className="mt-4 text-xl text-gray-600">
                Something went wrong on the server.
            </p>
        </div>
    );
}