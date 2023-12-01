import AdminSignIn from "../_root/pages/AdminSignIn";
import SignInForm from "../_root/pages/SignInForm";
import { api } from "../api";

export default function () {
  const [adminSignIn, setAdminSignin] = useState(false);

  return (
    <div className="h-screen py-40 flex flex-1 justify-center items-center m-10">
      {adminSignIn ? (
        <AdminSignIn setAdminSignin={setAdminSignin} />
      ) : (
        <SignInForm setAdminSignin={setAdminSignin} />
      )}
    </div>
  );
}
