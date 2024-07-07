import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const data = JSON.parse(fileContent);
    console.log(data.length);
    return data.length;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(0);
      return 0;
    }
    throw error;
  }
};

if (require.main === module) {
  countContacts().catch((error) => {
    console.error('Error counting contacts:', error);
  });
}

console.log(await countContacts());
