import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: number;
      is_admin: boolean;
    };
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export interface JwtPayload {
  id: number;
  email: string;
  is_admin: boolean;
  created_at: Date;
}



export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token necessário' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user as JwtPayload;
    next();
  });
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user?.is_admin) return res.status(403).json({ message: 'Acesso negado' });
  next();
}
