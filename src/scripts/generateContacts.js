import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  let data = [];

  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    data = JSON.parse(fileContent);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  data.push(...newContacts);

  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));

  console.log(`${number} contacts have been generated and added to ${PATH_DB}`);
};

if (require.main === module) {
  const numContacts = parseInt(process.argv[2], 10) || 10;
  generateContacts(numContacts).catch((error) => {
    console.error('Error generating contacts:', error);
  });
}

// const generateContacts = async (number) => {
//   const newContacts = [];
//   for (let i = 0; i < number; i++) {
//     const fakeContact = await createFakeContact();
//     newContacts.push(fakeContact);
//   }

//   const db = JSON.parse(fs.readFile(PATH_DB));
//   db.newContacts.push(...newContacts);

//   fs.writeFile(PATH_DB, JSON.stringify(db, undefined, 2))
//     .then(console.log)
//     .catch(console.error);
// };

generateContacts(5);

// createFakeContact
