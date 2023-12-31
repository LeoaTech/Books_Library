import { RouteContext } from "gadget-server";

/**
 * Route handler for POST books
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({ request, reply, api, logger, connections }) {

  const books = request.body;
  await reply.type("application/json").send({ books })

}