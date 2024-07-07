import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const data = JSON.parse(fileContent);
    console.log(data);
    return data;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log([]);
      return [];
    }
    throw error;
  }
};

if (require.main === module) {
  getAllContacts().catch((error) => {
    console.error('Error getting contacts:', error);
  });
}

console.log(await getAllContacts());
