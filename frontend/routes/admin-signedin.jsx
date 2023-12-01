import { useUser, useSignOut, useGet } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";
import { api } from "../api";
import userIcon from "../assets/default-user-icon.svg";
import { Link } from "react-router-dom";
import { useAdmin } from "../hooks/useCurrentAdminSession";

export default function () {
  const signOut = useSignOut();
  const admin = useAdmin()
  console.log(admin, "admin")


  const [{ error, data, fetching }, refresh] = useGet(api.currentSession, {
    select: {
      id: true,
      adminId: true,
    },
  });

  if (error) return <>Error: {error.toString()}</>;
  if (fetching && !data) return <>Fetching...</>;
  if (!data) return <>No current session found</>;

  return <div>Current session ID={data.id} and userId={data.adminId}</div>;

  // Any User can see this page after signed in   

  return (
    <div className="h-screen py-40 ">
      <h1 className="text-3xl bold">Admin Page</h1>
      <div className="card-stack">
        <div className="card user-card">
          <div className="card-content">
            <div className="userData">
              <p>id: admin-01</p>
              <p>
                name: administator
              </p>
              <p>
                email: <a href={`mailto:admin@gmail.com`}>admin@gmail.com</a>
              </p>
              <p>created: new Date() </p>
              <p> role:admin </p>
            </div>
          </div>
          <div className="sm-description">This data is fetched from the Admin model</div>
        </div>
        <div className="flex-vertical gap-4px">
          <strong>Actions:</strong>
          <Link to="/change-password">Change password</Link>
          <a onClick={signOut}>
            Sign Out
          </a>
        </div>
      </div>
    </div>
  )
}
