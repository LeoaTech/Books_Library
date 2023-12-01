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
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import AdminPage from "./routes/admin";
import ResetPasswordPage from "./routes/reset-password";
import VerifyEmailPage from "./routes/verify-email";
import ChangePassword from "./routes/change-password";
import ForgotPassword from "./routes/forgot-password";
import { useUser } from "@gadgetinc/react";
import { api } from "./api";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Routes from "./routes/index";
import Navbar from "./components/Navbar";
import AdminDashboard from "./_admin/AdminDashboard";
import AdminLayout from "./_admin/Layout";

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     // Public Routes for Authentication
  //     <Route path="/">
  //       <Route
  //         index
  //         element={
  //           <SignedOutOrRedirect>
  //             <Index />
  //           </SignedOutOrRedirect>
  //         }
  //       />
  //       <Route
  //         path="signed-in"
  //         element={
  //           <SignedInOrRedirect>
  //             <SignedInPage />
  //           </SignedInOrRedirect>
  //         }
  //       />
  //       // Signed in Page for Admin only
  //       <Route
  //         path="change-password"
  //         element={
  //           <SignedInOrRedirect>
  //             <ChangePassword />
  //           </SignedInOrRedirect>
  //         }
  //       />
  //       <Route
  //         path="forgot-password"
  //         element={
  //           <SignedOutOrRedirect>
  //             <ForgotPassword />
  //           </SignedOutOrRedirect>
  //         }
  //       />
  //       <Route
  //         path="sign-in"
  //         element={
  //           <SignedOutOrRedirect>
  //             <SignInPage />
  //           </SignedOutOrRedirect>
  //         }
  //       />
  //       // Added the Admin Sign in Page router
  //       <Route
  //         path="sign-up"
  //         element={
  //           <SignedOutOrRedirect>
  //             <SignUpPage />
  //           </SignedOutOrRedirect>
  //         }
  //       />
  //       <Route path="reset-password" element={<ResetPasswordPage />} />
  //       <Route path="verify-email" element={<VerifyEmailPage />} />
  //       <Route path="/app/admin" element={<AdminPage />}></Route>
  //     </Route>
  //     // Public Routes for home Pages
  //   )
  // );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        // Public Routes for Authentication and Landing Pagesds
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
        // Admin Routes
        <Route path="/app/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <SignedInOrRedirect>
                <AdminPage />
              </SignedInOrRedirect>
            }
          />
          {/* Add other admin routes here */}
        </Route>
      </Route>
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
      <RootLayout />
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
