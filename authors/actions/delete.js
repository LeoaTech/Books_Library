import { deleteRecord, ActionOptions, DeleteAuthorsActionContext } from "gadget-server";

/**
 * @param { DeleteAuthorsActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteAuthorsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
