import { applyParams, save, ActionOptions, SignInAdminActionContext } from "gadget-server";

/**
 * @param { SignInAdminActionContext } context
 */
export async function run({ params, record, logger, api, session }) {
  applyParams(params, record);
  record.lastSignedIn = new Date();
  // record.user_role = "admin";
  await save(record);
  // associate the current user record with the active session

  session?.set("user", { _link: record.id });
  session?.set("admin", { _link: record.id });


  // return {
  //   result: "ok"
  // }
};
/**
 * @param { SignInAdminActionContext } context
 */
export async function onSuccess({ params, record, logger, api, session }) {
  // sends the user a verification email if they have not yet verified
  logger.info(session)


};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
  returnType: true
};





