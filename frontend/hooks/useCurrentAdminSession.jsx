
import React from "react";
import { api } from "../api";
import { useUser, useSignOut, useSession, useGet, useFindOne } from "@gadgetinc/react";


export const useAdmin = () => {
  const [{ data, fetching, error }, _refetch] = useGet(api.currentSession);

  if (fetching) return "Loading...";
  if (error) return `Error loading data: ${error}`;

  console.log(data, "Session data")
  return data;
}