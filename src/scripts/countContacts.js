import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
 try {
   const data = await readContacts();   
   return JSON.parse(data).length;
 } catch (error) {
   console.log(error);
 }
};

console.log(await countContacts());