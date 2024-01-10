import { guestRoutes } from './guest/guest.route'
import fp from 'fastify-plugin'

const processRoutes = [guestRoutes]

export const routes = fp(async (server) => {
  for (const route of processRoutes) server.register(route)
})
