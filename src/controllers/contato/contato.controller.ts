import { Request, Response } from 'express'
import Contato from '../../models/contato.entity'
import Task from '../../models/contato.entity'

export default class ContatoController {
  static async store (req: Request, res: Response) {
    const { endereco, telefone, email } = req.body

    if (!endereco) {
      return res.status(400).json({ error: 'O endereço é obrigatório' })
    }

    const contato = new Contato()
    contato.endereco = endereco
    contato.telefone = telefone || false
    contato.email = email
    await contato.save()

    return res.status(201).json(contato)
  }

  static async index (req: Request, res: Response) {
    const contato = await Contato.find()
    return res.json(contato)
  }

  static async show (req: Request, res: Response) {
    const { id } = req.params

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const contato = await Contato.findOneBy({id: Number(id)})
    return res.json(contato)
  }

  static async delete (req: Request, res: Response) {
    const { id } = req.params

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const 
    contato = await Contato.findOneBy({id: Number(id)})
    if (!contato) {
      return res.status(404).json({ error: 'contato não encontrada' })
    }

    await contato.remove()
    return res.status(204).json()   }

static async update (req: Request, res: Response) {
    const { id } = req.params
    const { endereco, telefone, email } = req.body

    if(!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const contato = await Contato.findOneBy({id: Number(id)})
    if (!contato) {
        return res.status(404).json({ error: 'contato não encontrada' })
    }

    contato.endereco = endereco || contato.endereco
    contato.telefone = telefone || contato.telefone
    contato.email = email || contato.email
    await contato.save()

    return res.json(contato) 
    }
}