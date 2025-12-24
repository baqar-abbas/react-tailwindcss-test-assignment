import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 md:px-8">
      <div className="max-w-xl w-full bg-[#2f2f35] border border-gray-700 rounded-xl p-8 md:p-10 shadow-lg text-center space-y-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border border-gray-700 text-white text-2xl font-semibold">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-gray-300 leading-relaxed">
          The page you’re looking for doesn’t exist or has moved. Use the button
          below to return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-dark transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded bg-white text-dark text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
