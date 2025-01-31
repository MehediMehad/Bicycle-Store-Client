import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
const Login = () => {
  const [login, { error }] = useLoginMutation(undefined);
  const dispatch = useAppDispatch();

  console.log("Error=>", error);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "jon@example.com",
      password: "user1234",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      ...data,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: null }));
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
