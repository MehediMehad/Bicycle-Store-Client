import logo from "../../src/assets/icons/logo.png";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import RForm from "../components/form/RForm";
import RInput from "../components/form/RInput";
import { useAddUserMutation } from "../redux/features/auth/authApi";
const Registration = () => {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation(undefined);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User Creating...");
    try {
      const userInfo = {
        ...data,
      };
      await addUser(userInfo).unwrap();
      toast.dismiss(toastId);
      navigate("/login");
      toast.error("User Created Successfully", {
        duration: 3000,
      });
    } catch (err: any) {
      if (err.data?.message === "Invalid ID") {
        toast.dismiss(toastId);
        toast.error("This User already exists", {
          duration: 3000,
        });
      } else {
        toast.dismiss(toastId);
        toast.error(err.data?.message || "Something went wrong", {
          duration: 3000,
        });
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        {/* 🔹 Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <img className="w-14" src={logo} alt="Logo" />
          <div className="flex mt-2 text-xl font-semibold">
            <p>Pedal-</p>
            <p className="text-primary">Planet</p>
          </div>
        </div>

        {/* 🔹 Login Form */}
        <RForm className="space-y-4" onSubmit={onSubmit}>
          <RInput
            type="text"
            name="name"
            label="Name:"
            className="w-full border-gray-300 rounded-md focus:ring-blue-500"
          />
          <RInput
            type="text"
            name="email"
            label="Email:"
            className="w-full border-gray-300 rounded-md focus:ring-blue-500"
          />
          <RInput
            type="password"
            name="password"
            label="Password:"
            className="w-full border-gray-300 rounded-md focus:ring-blue-500"
          />
          <Button
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Signup
          </Button>
        </RForm>

        {/* 🔹 Footer Links */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Login an account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registration;
