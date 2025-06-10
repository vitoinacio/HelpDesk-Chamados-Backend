import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import ticketRoutes from './routes/ticketRoutes';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://help-desk-chamados.vercel.app',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).send('API is running!');
});
