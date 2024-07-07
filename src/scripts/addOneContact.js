import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  let data = [];

  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    data = JSON.parse(fileContent);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  const newContact = createFakeContact();
  data.push(newContact);

  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));

  console.log(`One contact has been added to ${PATH_DB}`);
};

if (require.main === module) {
  addOneContact().catch((error) => {
    console.error('Error adding contact:', error);
  });
}

addOneContact();
