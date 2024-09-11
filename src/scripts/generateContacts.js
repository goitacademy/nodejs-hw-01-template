import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const generatedContacts = Array.from({ length: number }, createFakeContact);
    const newContactList = [...contacts, ...generatedContacts];
    await writeContacts(newContactList);
    console.log('Згенеровано ${number} нових контактів!');
  } catch (error) {
    console.log('Помилка при генерації контактів:', error);
  }
};

generateContacts(5);
