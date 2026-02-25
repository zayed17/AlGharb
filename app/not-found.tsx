export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100">
      <h1 className="text-8xl font-bold text-customBlue">404</h1>
      <h2 className="text-4xl font-bold text-black mb-4">Page Not Found</h2>
      <a href="/" className="px-4 py-2 text-white bg-customGreen rounded">
        Go to Home
      </a>
    </div>
  );
}

