import { guestService } from './guest.service';
import { IGuest } from './guest.model';
import { FastifyReply, FastifyRequest } from 'fastify'

export const guestController = {
  save: async (request: FastifyRequest<{ Body: IGuest[] }>, reply: FastifyReply): Promise<void> => {
    return await guestService.save(request.body)
      .then(guest => reply.type('application/json').code(200).send(guest))
      .catch(error => reply.type('application/json').code(400).send(error))
  },
  getAll: async (request: FastifyRequest<{ Body: { password: string}}>, reply: FastifyReply): Promise<void> => {
    const { password } = request.body
    if (password !== process.env.GET_PWD) return await reply.type('application/json').code(401).send({ message: 'Wrong password' })
    return await guestService.getAll()
      .then(guests => reply.type('application/json').code(200).send(guests))
      .catch(error => reply.type('application/json').code(400).send(error))
  },
  getPresent: async (request: FastifyRequest<{ Body: { password: string}}>, reply: FastifyReply): Promise<void> => {
    const { password } = request.body
    if (password !== process.env.GET_PWD) return await reply.type('application/json').code(401).send({ message: 'Wrong password' })
    return await guestService.getPresent()
      .then(guests => reply.type('application/json').code(200).send(guests))
      .catch(error => reply.type('application/json').code(400).send(error))
  }
}
