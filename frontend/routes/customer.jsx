import { useUser, useSignOut } from "@gadgetinc/react";
import RootLayout from "../_root/RootLayout";

export default function () {
  const user = useUser();

  const signOut = useSignOut();

  // Any User can see this page after signed in

  return (
    <RootLayout />
  );
}
