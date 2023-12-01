import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useActionForm } from "@gadgetinc/react";

const SignInForm = () => {
    const {
        register,
        submit,
        formState: { errors, isSubmitting },
      } = useActionForm(api.user.signIn);
      const { search } = useLocation();
  return (
    <form
      className="custom-form flex justify-center items-center"
      onSubmit={submit}
    >
      <h1 className="form-title">Sign in</h1>
      <div className="custom-form">
        <a className="google-oauth-button" href={`/auth/google/start${search}`}>
          <img src={GoogleIcon} width={22} height={22} /> Continue with Google
        </a>
        <input
          className="custom-input"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="custom-input"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors?.root?.message && (
          <p className="format-message error">{errors.root.message}</p>
        )}
        <p className="p-4 text-sm">
          Forgot your password?{" "}
          <Link to="/forgot-password">Reset password</Link>
        </p>
        <button
          disabled={isSubmitting}
          type="submit"
          className="border border-blue-500 bg-blue-500 text-white rounded-lg py-2 w-1/2 "
        >
          Sign in
        </button>
        <p className="p-4 mt-2">
          Sign in as Admin?{" "}
          <Link to="/admin-signin" className="text-blue-800">
            admin Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
