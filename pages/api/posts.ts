import { NextApiRequest, NextApiResponse } from 'next';
import Post from '@/database/models/postsModel';

import('dotenv/config');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {

      const { title, slug, author, date, category, thumbnail } = req.body;

      // Validação básica dos campos
      if (!title || !slug || !author || !date || !category || !thumbnail) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      // Criando o novo post
      const newPost = new Post({
        title,
        slug,
        author,
        date,
        category,
        thumbnail,
      });

      // Salvando no banco
      await newPost.save();

      // Retorna uma resposta de sucesso
      return res.status(201).json({ message: 'Post created successfully!' });
    } catch (error) {
      console.error('Error creating post:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Se não for um POST, retorna um erro
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
