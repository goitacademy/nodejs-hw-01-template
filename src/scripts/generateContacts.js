import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = JSON.parse(await readContacts());   
    for (let i = 0; i < number; i ++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(JSON.stringify(contacts, undefined, number));
    
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
