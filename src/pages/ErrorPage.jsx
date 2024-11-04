import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <FiAlertTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or an error has occurred.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-[#9538E2] text-white font-medium rounded-full shadow-md hover:bg-violet-700 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
}
