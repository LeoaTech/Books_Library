import { RouteContext } from "gadget-server";

/**
 * Route handler for books 
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({ request, reply, api, logger, connections }) {

  const books = [{
    id: 1,
    title: "failry tale",
    desc: "blah bhal",
    author: "john guther",
    genre: "fiction"
  }]

  await reply.type("application/json").send({ books })
}
