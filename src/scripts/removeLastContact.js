import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const data = JSON.parse(fileContent);

    if (data.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    data.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));

    console.log(`The last contact has been removed from ${PATH_DB}`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('No contacts to remove.');
      return;
    }
    throw error;
  }
};

if (require.main === module) {
  removeLastContact().catch((error) => {
    console.error('Error removing the last contact:', error);
  });
}

removeLastContact();
