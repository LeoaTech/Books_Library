import { useUser, useSignOut } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";
import { api } from "../api";
import userIcon from "../assets/default-user-icon.svg";
import { Link } from "react-router-dom";

export default function () {
  const user = useUser(api);

  const signOut = useSignOut();

  // Any User can see this page after signed in   

  return user ? (
    <div className="h-screen py-40 ">
      <h1 className="text-3xl bold">Hello Appp</h1>
      <div className="card-stack">
        <div className="card user-card">
          <div className="card-content">
            <img className="icon" src={user.googleImageUrl ?? userIcon} />
            <div className="userData">
              <p>id: {user.id}</p>
              <p>
                name: {user.firstName} {user.lastName}
              </p>
              <p>
                email: <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
              <p>created: {user.createdAt.toString()}</p>
              <p> role:{user.user_role} </p>
            </div>
          </div>
          <div className="sm-description">This data is fetched from the user model</div>
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
  ) : null;
}
