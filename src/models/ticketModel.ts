import pool from '../db';

export interface Ticket {
  id: number;
  user_id: number;
  description: string;
  priority: 'baixa' | 'media' | 'alta';
  status: 'pendente' | 'resolvido';
  created_at: Date;
  updated_at: Date;
}

export async function createTicket(
  user_id: number,
  description: string,
  priority: 'baixa' | 'media' | 'alta',
) {
  const result = await pool.query(
    `INSERT INTO tickets (user_id, description, priority) VALUES ($1, $2, $3) RETURNING *`,
    [user_id, description, priority],
  );
  return result.rows[0];
}

export async function updateTicketStatus(
  id: number,
  status: 'pendente' | 'resolvido',
) {
  const result = await pool.query(
    `UPDATE tickets SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
    [status, id],
  );
  return result.rows[0];
}

export async function getTicketsByUser(user_id: number) {
  const result = await pool.query(
    `SELECT t.*, u.email FROM tickets t JOIN users u ON t.user_id = u.id WHERE user_id = $1 ORDER BY created_at DESC`,
    [user_id],
  );
  return result.rows;
}

export async function getAllTickets() {
  const result = await pool.query(
    `SELECT t.*, u.email FROM tickets t JOIN users u ON t.user_id = u.id ORDER BY created_at DESC`,
  );
  return result.rows;
}

export async function getTicketById(id: number) {
  const result = await pool.query(`SELECT * FROM tickets WHERE id = $1`, [id]);
  return result.rows[0];
}
