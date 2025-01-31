import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation(undefined);

  console.log("Error=>", error);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "jon@example.com",
      password: "user1234",
    },
  });

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 mt-2 "
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="">
        <label htmlFor="password">Password:</label>
        <input
          className="border-2 mt-2"
          type="text"
          id="password"
          {...register("password")}
        />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
