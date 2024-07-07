import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
  console.log(`All contacts have been removed from ${PATH_DB}`);
};

if (require.main === module) {
  removeAllContacts().catch((error) => {
    console.error('Error removing contacts:', error);
  });
}

removeAllContacts();
