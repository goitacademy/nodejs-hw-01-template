import { readContacts } from "../utils/readContacts.js";
export const getAllContacts = async () => {
    try {
        const contacts =await readContacts();
        return contacts;
    } catch (error) {
        console.error('Помилка:', error);
        return [];
    }

};

console.log(await getAllContacts());
