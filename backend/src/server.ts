import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// This is the data we are serving to the frontend
const PRODUCTS = [
  { id: '1', name: 'Classic Rose Bouquet', price: 49.99, category: 'Romance', image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80', badge: 'Bestseller' },
  { id: '2', name: 'Sunny Sunflowers', price: 39.99, category: 'Gifts', image: 'https://images.unsplash.com/photo-1543314988-59648939c36c?auto=format&fit=crop&w=800&q=80' },
  { id: '3', name: 'Spring Tulips Mix', price: 44.99, category: 'Seasonal', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80' },
  { id: '4', name: 'Elegant Orchids', price: 69.99, category: 'Luxury', image: 'https://images.unsplash.com/photo-1566904990038-1644d673190e?auto=format&fit=crop&w=800&q=80', badge: 'Luxury' },
  { id: '5', name: 'Lavender Dreams', price: 54.99, category: 'Seasonal', image: 'https://images.unsplash.com/photo-1498606775960-9d57a4087595?auto=format&fit=crop&w=800&q=80' },
  { id: '6', name: 'Wedding Romance', price: 149.99, category: 'Events', image: 'https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?auto=format&fit=crop&w=800&q=80', badge: 'Bestseller' },
];


app.get('/', (req: Request, res: Response) => {
  res.send('Florist Backend is Running!');
});

app.get('/api/products', (req: Request, res: Response) => {
  res.json(PRODUCTS);
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});