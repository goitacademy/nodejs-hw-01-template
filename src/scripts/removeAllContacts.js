
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log('Всі контакти видалено');

    } catch (error) {
console.error('Помилка:', error);
  }
};

removeAllContacts();
