import { guestService } from './guest.service';
import { IGuest } from './guest.model';
import { FastifyReply, FastifyRequest } from 'fastify'

export const guestController = {
  save: async (request: FastifyRequest<{ Body: IGuest[] }>, reply: FastifyReply): Promise<void> => {
    await guestService.save(request.body)
      .then(guest => reply.type('application/json').code(200).send(guest))
      .catch(error => reply.type('application/json').code(400).send(error))
  },
  getAll: async (_request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    await guestService.getAll()
      .then(guests => reply.type('application/json').code(200).send(guests))
      .catch(error => reply.type('application/json').code(400).send(error))
  }
}
