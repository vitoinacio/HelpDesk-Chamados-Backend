import { Request, Response } from 'express';
import {
  createTicket,
  getAllTickets,
  getTicketsByUser,
  updateTicketStatus,
  getTicketById,
} from '../models/ticketModel';

export async function createNewTicket(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    const user_id = req.user.id;
    const { description, priority } = req.body;

    if (!description || !priority) {
      return res.status(400).json({ message: 'Descrição e prioridade são obrigatórios' });
    }

    const ticket = await createTicket(user_id, description, priority);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
}

export async function getTickets(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    if (req.user.is_admin) {
      const tickets = await getAllTickets();
      res.json(tickets);
    } else {
      const tickets = await getTicketsByUser(req.user.id);
      res.json(tickets);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
}

export async function changeTicketStatus(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    const { id } = req.params;
    const { status } = req.body;

    if (!['pendente', 'resolvido'].includes(status)) {
      return res.status(400).json({ message: 'Status inválido' });
    }

    const ticket = await getTicketById(Number(id));
    if (!ticket) return res.status(404).json({ message: 'Chamado não encontrado' });

    const updated = await updateTicketStatus(Number(id), status);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
}

