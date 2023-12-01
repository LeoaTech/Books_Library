import { Client } from "@gadget-client/my-library-app";

export const api = new Client({ environment: window.gadgetConfig.environment });

console.log(api, "Api")

