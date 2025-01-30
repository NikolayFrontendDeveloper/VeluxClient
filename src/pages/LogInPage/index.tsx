import { useForm } from "react-hook-form";
import s from "./styles.module.scss";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="main_container">
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h2 className={s.login_title}>Log In</h2>
        <div className={s.input_box}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            id="email"
            type="text"
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={s.input_box}>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Invalid password",
              },
            })}
            id="password"
            type="password"
            placeholder="Email"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
