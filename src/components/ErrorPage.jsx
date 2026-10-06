import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const statusCode = location.state?.statusCode || 500;

    const message = location.state?.message || "Something went wrong. Please try again.";

    const getErrorTitle = () => {
        switch(statusCode){
            case 400: 
                return "Bad Request!";
            case 401:
                return "Unauthorized";
            case 403:
                return "Access Denied";
            case 404:
                return "Page Not Found";
            case 500:
                return "Internal Server Error";
            default:
                return "Something Went Wrong";
        }
    };

    const handleGoHome = () => {
        navigate("/");
    };

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">

          <div className="text-7xl font-bold text-error">
            {statusCode}
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {getErrorTitle()}
          </h1>

          <p className="text-base-content/70 mt-2">
            {message}
          </p>

          <div className="card-actions mt-6 gap-3">

            <button
              className="btn btn-outline"
              onClick={handleGoBack}
            >
              Go Back
            </button>

            <button
              className="btn btn-primary"
              onClick={handleGoHome}
            >
              Go Home
            </button>

          </div>

        </div>
      </div>
    </div>
    )
}

export default ErrorPage;