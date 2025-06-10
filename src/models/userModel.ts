import pool from '../db';
import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  email: string;
  password: string;
  is_admin: boolean;
  created_at: Date;
}

export async function createUser(
  email: string,
  password: string,
  isAdmin = false,
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (email, password, is_admin) VALUES ($1, $2, $3) RETURNING id, email, is_admin, created_at',
    [email, hashedPassword, isAdmin],
  );
  return result.rows[0];
}

export async function findUserByEmail(email: string) {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  return result.rows[0];
}

export async function findUserById(id: number) {
  const result = await pool.query(
    'SELECT id, email, is_admin, created_at FROM users WHERE id = $1',
    [id],
  );
  return result.rows[0];
}
