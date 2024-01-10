import { FastifyInstance } from 'fastify'
import { guestController } from './guest.controller'

const url = '/guest'
export async function guestRoutes(server: FastifyInstance) {
  server.post(url + '/getAll', guestController.getAll)
  server.post(url + '/getPresent', guestController.getPresent)
  server.post(url, guestController.save)
}