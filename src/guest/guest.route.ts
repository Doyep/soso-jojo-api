import { FastifyInstance } from 'fastify'
import { guestController } from './guest.controller'

const url = '/guest'
export async function guestRoutes(server: FastifyInstance) {
  server.get(url, guestController.getAll)
  server.get(url + '/present', guestController.getPresent)
  server.post(url, guestController.save)
}