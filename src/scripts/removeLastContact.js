import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts =await readContacts();
        if (contacts.length > 0) {
            contacts.pop();
            await writeContacts(contacts);
            console.log('Останній контакт видалено');
        } else {
            console.log('Немає контактів для видалення');
        }


    } catch (error) {
        console.error('Поилка:', error);

    }
};

removeLastContact();
