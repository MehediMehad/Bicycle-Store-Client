import logo from "../../src/assets/icons/logo.png";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import RForm from "../components/form/RForm";
import RInput from "../components/form/RInput";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation(undefined);

  console.log("Error=>", error);

  const defaultValues = {
    email: "jon@example.com",
    password: "user1234",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        ...data,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      toast.dismiss(toastId);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { duration: 2000 });
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.dismiss(toastId);
      toast.error(err.data.message || "Something went wrong", {
        duration: 3000,
      });
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
        <RForm
          className="space-y-4"
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        >
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
            Login
          </Button>
        </RForm>

        {/* 🔹 Footer Links */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <NavLink
            to="create-account"
            className="text-blue-500 hover:underline"
          >
            Create an account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
