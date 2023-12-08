import {
  SignedInOrRedirect,
  SignedOut,
  SignedOutOrRedirect,
} from "@gadgetinc/react";
import { Suspense, useEffect, useState, lazy } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Index from "./routes/index";
import SignedInPage from "./routes/signed-in";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import AdminPage from "./routes/customer";
import ResetPasswordPage from "./routes/reset-password";
import VerifyEmailPage from "./routes/verify-email";
import ChangePassword from "./routes/change-password";
import ForgotPassword from "./routes/forgot-password";
import { useUser } from "@gadgetinc/react";
import RootLayout from "./_root/RootLayout";
import Routes from "./routes/index";
import AdminDashboard from "./_admin/AdminDashboard";
import CustomerPage from "./routes/customer";
import routes from "./utiliz";
import Loader from "./components/Loader/Loading";
const Dashboard = lazy(() => import("./_admin/pages/Home"));

const App = () => {
  const user = useUser();
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
        <Route path="/" element={<CustomerPage />}>
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
        <Route
          path="/dashboard"
          element={
            <SignedInOrRedirect>
              <AdminDashboard />
            </SignedInOrRedirect>
          }
        >
          <Route
            index
            element={
              <SignedInOrRedirect>
                <Dashboard />
              </SignedInOrRedirect>
            }
          />
          {routes.map((route, i) => {
            const { component: Component, path } = route;
            return (
              <Route
                key={i}
                exact={true}
                path={`/dashboard${path}`}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
                // render={(props) => <Component {...props} />}
              />
            );
          })}
        </Route>
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loader />}>
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
  return <>
  header
  </>;
};

export default App;
