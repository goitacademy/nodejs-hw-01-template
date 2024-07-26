import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import mongoose from 'mongoose';
import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';

export function setupServer() {
  const app = express();
  const PORT = Number(env('PORT', '3000'));

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/contacts', async (req, res) => {
    try {
      const contacts = await getAllContacts();
      res.status(200).json({
        status: res.statusCode,
        message: 'Successfully found contacts!',
        data: contacts,
      });
    } catch (error) {
      res.status(500).json({
        status: res.statusCode,
        message: 'Error retrieving contacts',
        error: error.message,
      });
    }
  });

  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      return res.status(404).json({
        message: 'Not found',
      });
    }

    try {
      const contact = await getContactById(contactId);
      if (!contact) {
        return res.status(404).json({
          status: 404,
          message: `Contact with id ${contactId} not found!`,
        });
      }

      res.status(200).json({
        status: res.statusCode,
        message: `Successfully found contact with id: ${contactId}!`,
        data: contact,
      });
    } catch (error) {
      res.status(500).json({
        status: res.statusCode,
        message: 'Error retrieving contact',
        error: error.message,
      });
    }
  });

  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
