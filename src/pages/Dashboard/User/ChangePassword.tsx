import React, { useState } from "react";
import { useChangePasswordMutation } from "../../../redux/features/admin/userManagement";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.oldPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (formData.newPassword.length < 8) {
      setError("New password must be at least 8 characters long");
      return;
    }

    try {
      await changePassword({
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      }).unwrap();
      setSuccess("Password updated successfully!");
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err: any) {
      setError(err?.data?.message || "Failed to update password");
    }
  };

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#014036] px-6 py-4">
          <h2 className="text-xl font-bold text-white">Change Password</h2>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <p className="text-green-700">{success}</p>
            </div>
          )}

          <div>
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Current Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#014036] cursor-pointer hover:bg-[#014036] text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
