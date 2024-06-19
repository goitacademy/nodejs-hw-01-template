import { getAllContacts } from './getAllContacts.js';
export const countContacts = async () => {
  const arrContact = await getAllContacts();
  const countContact = arrContact.length;
  return countContact;
};

console.log(await countContacts());
