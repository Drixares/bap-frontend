import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
            <p className="text-gray-500 mb-8">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Return to Home
            </Link>
        </div>
    );
}

export default NotFoundPage; 