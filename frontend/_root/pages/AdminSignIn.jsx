import React from 'react'
import { Link, useLocation, useNavigation } from "react-router-dom";
import { useActionForm } from "@gadgetinc/react";
import { api } from '../../api';

const AdminSignIn = ({setAdminSignin}) => {
    const {
        register,
        submit,
        formState: { errors, isSubmitting },
      } = useActionForm(api.user.signIn,{
        defaultValues:{
            user_role: 'admin',
        }
      });
  return (
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
            Sign in as User? <span className="text-blue-800" onClick={()=> setAdminSignin(false)}>User Login</span>
          </p>
        </div>
      </form>
  )
}

export default AdminSignIn