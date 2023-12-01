import { save, ActionOptions, SignInUserActionContext, applyParams } from "gadget-server";

/**
 * @param { SignInUserActionContext } context
 */
export async function run({ params, record, logger, api, session }) {
  console.log(params, "Params at Sign in form")
  applyParams(params, record);
  record.lastSignedIn = new Date();
  record.emailVerified = true;
  record.emailVerificationToken = null;
  record.emailVerificationTokenExpiration = null
  record.user_role = "admin";
  await save(record);
  console.log(api, "Sign in");

  console.log(record, "Record");

  await save(record);


  // associate the current user record with the active session
  session?.set("user", { _link: record.id });

  console.log(session, "Session");


};

/**
 * @param { SignInUserActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};