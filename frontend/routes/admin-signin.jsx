import GoogleIcon from "../assets/google.svg";
import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { Link, useLocation, useNavigation } from "react-router-dom";

export default function () {
  const {
    register,
    submit,
    formState: { errors, isSubmitting },
  } = useActionForm(api.user.signIn);

  const navigate = useNavigation();

  return (
    <div className="h-screen py-40 flex flex-1 justify-center items-center m-10">
      <form className="custom-form flex justify-center items-center" onSubmit={submit}>
        <h1 className="form-title">Sign in as Admin</h1>
        <div className="custom-form">

          <input className="custom-input" placeholder="Email" {...register("email")} />
          <input className="custom-input" placeholder="Password" type="password" {...register("password")} />
          {errors?.root?.message && <p className="format-message error">{errors.root.message}</p>}

          <button disabled={isSubmitting} type="submit" className="border border-blue-500 bg-blue-500 text-white rounded-lg py-2 w-1/2 ">
            Sign in
          </button>
          <p className="p-4 mt-2">
            Sign in as User? <Link to="/sign-in" className="text-blue-800">User Login</Link>
          </p>
        </div>
      </form></div>
  );
}
