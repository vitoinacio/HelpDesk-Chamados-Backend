import { Router } from 'express';
import { authenticateToken, isAdmin } from '../middlewares/authMiddleware';
import { createNewTicket, getTickets, changeTicketStatus } from '../controllers/ticketController';

const router = Router();

router.use(authenticateToken);

router.get('/', getTickets);
router.post('/', createNewTicket);
router.patch('/:id/status', isAdmin, changeTicketStatus);

export default router;
