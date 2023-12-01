import { useUser, useSignOut } from "@gadgetinc/react";
import { api } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "../routes/index";

export default function () {
  const user = useUser(api);
  const isAdmin = user?.user_role?.find((role) => role === "admin");
  const navigate = useNavigate();
  console.log(isAdmin);

  useEffect(() => {
    // Admin will Redirect to Admin Dashboard when Signed-in successfully
    if (isAdmin != undefined) {
      navigate("/app/admin");
    }
    
  }, []);

  // Any User can see this page after signed in
  return(
    <>

    {/* Rendered the Home Component or u can redirect to Shop Page to Users */}
    <Index />
    </>
  )
}
