import GoogleIcon from "../assets/google.svg";
import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { useLocation } from "react-router-dom";

export default function () {
  const {
    register,
    submit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useActionForm(api.user.signUp);
  const { search } = useLocation();

  return (
    <div className="py-40 h-screen flex flex-1 justify-center items-center ">
      <form className="custom-form" onSubmit={submit}>
        <h1 className="form-title">Create account</h1>
        <div className="custom-form">
          <a className="google-oauth-button" href={`/auth/google/start${search}`}>
            <img src={GoogleIcon} width={22} height={22} /> Continue with Google
          </a>
          <input className="custom-input" placeholder="Email" {...register("email")} />
          {errors?.user?.email?.message && <p className="format-message error">Email: {errors.user.email.message}</p>}
          <input className="custom-input" placeholder="Password" type="password" {...register("password")} />
          {errors?.user?.password?.message && <p className="format-message error">Password: {errors.user.password.message}</p>}
          {errors?.root?.message && <p className="format-message error">{errors.root.message}</p>}
          {isSubmitSuccessful && <p className="format-message success">Please check your inbox</p>}
          <button disabled={isSubmitting} type="submit" className="border border-blue-500 bg-blue-500 text-white rounded-lg py-2 w-1/2 ">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
