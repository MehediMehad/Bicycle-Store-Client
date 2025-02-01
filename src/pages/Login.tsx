import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
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
    <RForm className="w-full" onSubmit={onSubmit} defaultValues={defaultValues}>
      <RInput type="text" name="email" label="Email:" />
      <RInput type="text" name="password" label="Password:" />
      <Button htmlType="submit">Login</Button>
    </RForm>
  );
};

export default Login;
