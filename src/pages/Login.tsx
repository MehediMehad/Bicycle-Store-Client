import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
// 27-6 (IMPORTANT) set cookies in the browser
const Login = () => {
  const [login, { data, error }] = useLoginMutation(undefined);

  console.log("Data=>", data);
  console.log("Error=>", error);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "jon@example.com",
      password: "user1234",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const userInfo = {
      ...data,
    };
    login(userInfo);
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
