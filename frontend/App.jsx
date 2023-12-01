import {
  SignedInOrRedirect,
  SignedOut,
  SignedOutOrRedirect,
} from "@gadgetinc/react";
import { Suspense, useEffect, useState } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Index from "./routes/index";
import SignedInPage from "./routes/signed-in";
import AdminSignedInPage from "./routes/admin-signedin";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import AdminSignInPage from "./routes/admin-signin";
import ResetPasswordPage from "./routes/reset-password";
import VerifyEmailPage from "./routes/verify-email";
import ChangePassword from "./routes/change-password";
import ForgotPassword from "./routes/forgot-password";
import { useUser, useSignOut, useSession, useGet, useFindOne } from "@gadgetinc/react";
import { api } from "./api";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Routes from "./routes/index";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);


  const user = useUser();
  console.log(user, "user")
  const session = useSession(api);
  console.log(session);
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Public Routes for Authentication
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="signed-in"
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />

        // Signed in Page for Admin only

        <Route
          path="admin-signedin"
          element={
            <SignedInOrRedirect>
              <AdminSignedInPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="change-password"
          element={
            <SignedInOrRedirect>
              <ChangePassword />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="forgot-password"
          element={
            <SignedOutOrRedirect>
              <ForgotPassword />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-in"
          element={
            <SignedOutOrRedirect>
              <SignInPage />
            </SignedOutOrRedirect>
          }
        />
        // Added the Admin Sign in Page router
        <Route
          path="admin-signin"
          element={
            // <SignedOutOrRedirect>
            <AdminSignInPage />
            // </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-up"
          element={
            <SignedOutOrRedirect>
              <SignUpPage />
            </SignedOutOrRedirect>
          }
        />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
      </Route>
      // Public Routes for home Pages
    )
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export const Header = () => {

  return (
    <>
      <Navbar />
    </>
  );

};

export default App;
