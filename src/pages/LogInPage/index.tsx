import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import s from "./styles.module.scss";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function LogInPage() {
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form Data:", data);
  };

  const handleVisiblePass = () => {
    isVisiblePass ? setIsVisiblePass(false) : setIsVisiblePass(true);
  }

  return (
    <div className={s.main_container}>
      <div className={s.banner_media}>
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
              type={isVisiblePass ? "text" : "password"}
              placeholder="Password"
            />
            {isVisiblePass ? (
              <img onClick={handleVisiblePass} className={s.password_eye} src="password-eye.svg" alt="eye" />
            ) : (
              <img onClick={handleVisiblePass}  className={s.password_eye} src="password-eye-crossed.svg" alt="eye" />
            )}
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">Log In</button>
          <p>Don't have an account? <NavLink className={s.link} to="/sign-up">Sign Up</NavLink></p>
        </form>
        <img className={s.banner} src="banner-media.svg" alt="banner" />
      </div>
    </div>
  );
}
