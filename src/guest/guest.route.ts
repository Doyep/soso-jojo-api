import { FastifyInstance } from 'fastify'
import { guestController } from './guest.controller'

const url = '/guest'
export async function guestRoutes(server: FastifyInstance) {
  server.get(url, guestController.getAll)
  server.post(url, guestController.save)
}