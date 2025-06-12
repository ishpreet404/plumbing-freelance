import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LockIcon, UserIcon } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

export const AdminLogin = (): JSX.Element => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAdmin } = useContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in a real app, this would be more secure)
    if (credentials.username === "admin" && credentials.password === "plumbing123") {
      setIsAdmin(true);
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#2585b8] rounded-full flex items-center justify-center mx-auto mb-4">
            <LockIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-600">Access the content management panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="username"
                name="username"
                required
                value={credentials.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2585b8] focus:border-transparent"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full bg-[#2585b8] hover:bg-[#1e6b96] text-white py-3">
            Login
          </Button>
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Demo Credentials:</h3>
          <p className="text-sm text-blue-700">Username: admin</p>
          <p className="text-sm text-blue-700">Password: plumbing123</p>
        </div>
      </div>
    </div>
  );
};